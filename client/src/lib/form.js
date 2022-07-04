function Formulir({ title, placeholder, onChange , type}) {

  return (
    
      <div className="form-group">
        <label>{title}</label>
        <input
          onChange={(e) => {
            onChange(e)
          }}
          className="form-control"
          placeholder={placeholder}
          type={type}         
        />
      </div>
    
  );
}

function NewForm({title, placeholder, values}){
  let dataini = Object.keys(values)

  return(
    <div>
      {dataini.map((item) =>{
        return(
          <div key={Math.random()}>
            <label>{item}</label>
            <input
            className="form-control"
            place holder={values[item]}
            ></input>

          </div>
        )
      }
      
      )}
    </div>
  )
}

function AdaValuenya({ values, ketikaBerubah }) {
  let body = {};
  let datanya = Object.keys(values);
   
  return (
    <div className="container">
      {datanya.map((itm) => {
        return (
          <div key={Math.random()}>
            <div className=" ">
              <label>{itm}</label>
              {/* elm = html input */}
              <input
                className="form-control"
                placeholder={values[itm]}
                onChange={(elm) => {
                  body[itm] = elm.target.value;
                  ketikaBerubah(body);
                }}
              />
            </div>
          </div>
        );
      })}
      <br />
    </div>
  );
}

function GakAdaValues({ items, ketikaBerubah }) {
  let body = {};
  return (
    <div className="container">
      {items.map((itm) => {
        return (
          <div key={itm}>
            <div className=" ">
              <label>{itm}</label>
              {/* elm = html input */}
              <input
                className="form-control"
                placeholder={"Masukkan " + itm}
                onChange={(elm) => {
                  body[itm] = elm.target.value;
                  ketikaBerubah(body);
                }}
              />
            </div>
          </div>
        );
      })}
      <br />
    </div>
  );
}

function MyForm({ items, values, ketikaBerubah }) {
  if (values == null || values == undefined) {
    return <GakAdaValues items={items} ketikaBerubah={ketikaBerubah} />;
  } else {
    return <AdaValuenya values={values} ketikaBerubah={ketikaBerubah} />;
  }
}

export { Formulir, MyForm, NewForm };
