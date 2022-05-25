// TODO - add mechanism for making icons partially transparent

const Icon = (props: {url: string}) => {
  return (
    <img className="icon" src={props.url} />
  )
}

export default Icon