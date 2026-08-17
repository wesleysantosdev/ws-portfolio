import { useEffect, useRef, useState } from 'react'

import { siteContent } from '../../../content/siteContent'
import styles from './CursorFollower.module.css'

const CURSOR_OFFSET = 18
const COMPACT_RADIUS = 5
const EXPANDED_RADIUS = 56
const VIEWPORT_MARGIN = 8
const FOLLOW_STRENGTH = 0.28
const SETTLE_DISTANCE = 0.1

function clampToViewport(value, radius, viewportSize) {
  const edge = radius + VIEWPORT_MARGIN
  return Math.min(Math.max(value, edge), Math.max(edge, viewportSize - edge))
}

export function CursorFollower({ label = siteContent.projectsUi.cursorLabel }) {
  const cursorRef = useRef(null)
  const frameRef = useRef(null)
  const currentPositionRef = useRef({ x: 0, y: 0 })
  const targetPositionRef = useRef({ x: 0, y: 0 })
  const hasPositionRef = useRef(false)
  const visibleRef = useRef(false)
  const expandedRef = useRef(false)
  const [isEnabled, setIsEnabled] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    if (typeof window.matchMedia !== 'function') return undefined

    const pointerQuery = window.matchMedia('(hover: hover) and (pointer: fine)')
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    let canFollowPointer = pointerQuery.matches && !motionQuery.matches

    function applyPosition(position) {
      const cursor = cursorRef.current
      if (!cursor) return

      cursor.style.setProperty('--cursor-x', `${position.x}px`)
      cursor.style.setProperty('--cursor-y', `${position.y}px`)
    }

    function animatePosition() {
      const current = currentPositionRef.current
      const target = targetPositionRef.current
      const deltaX = target.x - current.x
      const deltaY = target.y - current.y

      current.x += deltaX * FOLLOW_STRENGTH
      current.y += deltaY * FOLLOW_STRENGTH

      if (Math.abs(deltaX) <= SETTLE_DISTANCE && Math.abs(deltaY) <= SETTLE_DISTANCE) {
        current.x = target.x
        current.y = target.y
        applyPosition(current)
        frameRef.current = null
        return
      }

      applyPosition(current)
      frameRef.current = window.requestAnimationFrame(animatePosition)
    }

    function schedulePositionUpdate() {
      if (frameRef.current !== null) return
      frameRef.current = window.requestAnimationFrame(animatePosition)
    }

    function hideCursor() {
      if (!visibleRef.current) return
      visibleRef.current = false
      hasPositionRef.current = false
      setIsVisible(false)

      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current)
        frameRef.current = null
      }
    }

    function updateCapability() {
      canFollowPointer = pointerQuery.matches && !motionQuery.matches
      setIsEnabled(canFollowPointer)

      if (!canFollowPointer) hideCursor()
    }

    function handlePointerMove(event) {
      if (!canFollowPointer) return

      const trigger = event.target instanceof Element
        ? event.target.closest('[data-cursor-label]')
        : null
      const isOverTrigger = Boolean(trigger)
      const radius = isOverTrigger ? EXPANDED_RADIUS : COMPACT_RADIUS
      const target = {
        x: clampToViewport(event.clientX + CURSOR_OFFSET, radius, window.innerWidth),
        y: clampToViewport(event.clientY + CURSOR_OFFSET, radius, window.innerHeight)
      }

      targetPositionRef.current = target

      if (!hasPositionRef.current) {
        hasPositionRef.current = true
        currentPositionRef.current = { ...target }
        applyPosition(target)
      }

      if (!visibleRef.current) {
        visibleRef.current = true
        setIsVisible(true)
      }

      if (expandedRef.current !== isOverTrigger) {
        expandedRef.current = isOverTrigger
        setIsExpanded(isOverTrigger)
      }

      schedulePositionUpdate()
    }

    function handlePointerOut(event) {
      if (event.relatedTarget === null) hideCursor()
    }

    updateCapability()
    pointerQuery.addEventListener('change', updateCapability)
    motionQuery.addEventListener('change', updateCapability)
    window.addEventListener('pointermove', handlePointerMove)
    document.addEventListener('pointerout', handlePointerOut)
    window.addEventListener('blur', hideCursor)

    return () => {
      pointerQuery.removeEventListener('change', updateCapability)
      motionQuery.removeEventListener('change', updateCapability)
      window.removeEventListener('pointermove', handlePointerMove)
      document.removeEventListener('pointerout', handlePointerOut)
      window.removeEventListener('blur', hideCursor)

      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current)
      }
    }
  }, [])

  return (
    <div
      ref={cursorRef}
      className={styles.cursor}
      aria-hidden="true"
      data-testid="cursor-follower"
      data-enabled={isEnabled}
      data-visible={isVisible}
      data-expanded={isExpanded}
    >
      <span className={styles.label}>{label}</span>
    </div>
  )
}
