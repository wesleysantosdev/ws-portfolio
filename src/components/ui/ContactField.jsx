function ContactField({
  id,
  label,
  name,
  value,
  onChange,
  type = 'text',
  as = 'input',
  rows
}) {
  const sharedProps = {
    id,
    name,
    className: `form-input ${value ? 'has-content' : ''}`,
    value,
    onChange,
    required: true
  }

  return (
    <div className="form-group">
      {as === 'textarea' ? <textarea {...sharedProps} rows={rows} /> : <input {...sharedProps} type={type} />}
      <label htmlFor={id} className="form-label">
        {label}
      </label>
    </div>
  )
}

export default ContactField
