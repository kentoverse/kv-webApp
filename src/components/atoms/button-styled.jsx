
const ButtonDynamic = props => (
  <button>
    {props.children}
    <style jsx>{`
      button {
        color: #999;
        display: inline-block;
        font-size: 2em;
      }
    `}</style>
    <style jsx>{`
      button {
        padding: ${'large' in props ? '30' : '10'}px;
        background: 'indigo';
      }
    `}</style>
  </button>
)


const ButtonClassName = props => (
  <button className={'large' in props && 'large'}>
    {props.children}
    <style jsx>{`
      button {
        padding: 20px;
        background: #eee;
        color: #999;
      }
      .large {
        padding: 50px;
      }
    `}</style>
  </button>
)

// const theme = {
//   buttonColor: 'bg-gradient-to-r from-cyan-500 to-blue-500',
//   buttonSize: 'mx-auto px-4'
// }


const ButtonInline = ({ label, theme }) => (

  <button className={`${theme.buttonColor + ` ` + theme.buttonSize}`} type="button">
    {label}
    <style jsx>{`
      button {
        padding: 10px;
      }
    `}</style>
  </button>
)


export {
  ButtonDynamic,
  ButtonClassName,
  ButtonInline
}

