import './styles.css'

function InputForm(prop: any) {
  return (
    <div className="content-input">
        <label htmlFor={prop.name}>{prop.textValue}</label>
        <input name={prop.name} {...prop}/>
    </div>
  )
}

export default InputForm
