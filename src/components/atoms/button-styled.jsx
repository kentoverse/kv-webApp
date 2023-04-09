
const ButtonDynamic = (props) => (
  <button>
    {props.children}
    <style jsx>{`
      .buttonSet {
        color: ${props.action};
        display: inline-block;
        font-size: 2em;
      }
    `}</style>
    <style jsx>{`
      .buttonSet {
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
      .buttonSet {
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


const ButtonInline = ({ label, theme }) => (

  <button type="button" className={`"${theme.action + ` ` + theme.size}"`}>
    {label}
    <style jsx>{`
      .buttonSet {
        padding: 10px;
      }
    `}</style>
  </button>
)


export {
  ButtonDynamic,
  ButtonClassName,
  ButtonInline,
}

