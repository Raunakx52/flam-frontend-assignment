type Props = {
  value: string
  onChange: (value: string) => void
  onSubmit: () => void
  disabled: boolean
}

export default function PromptInput({ value, onChange, onSubmit, disabled }: Props) {
  const canSubmit = value.trim().length >= 3 && !disabled

  return (
    <section className="prompt-card" aria-labelledby="prompt-heading">
      <div className="section-heading">
        <div>
          <p className="eyebrow">AI study workspace</p>
          <h1 id="prompt-heading">Turn any topic into an interactive study kit</h1>
        </div>
      </div>
      <label className="field-label" htmlFor="study-input">
        Paste notes or describe a topic
      </label>
      <textarea
        id="study-input"
        value={value}
        onChange={event => onChange(event.target.value)}
        placeholder="Example: Explain operating-system deadlocks, prevention, avoidance, and Banker's algorithm for an interview."
        rows={7}
        maxLength={12000}
        disabled={disabled}
      />
      <div className="prompt-actions">
        <span className="character-count">{value.length.toLocaleString()} / 12,000</span>
        <button className="primary-button" type="button" onClick={onSubmit} disabled={!canSubmit}>
          Generate study kit
        </button>
      </div>
    </section>
  )
}
