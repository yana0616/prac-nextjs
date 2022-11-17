export default function Hero({ title, subTitle, imageOn = false }) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{subTitle}</p>
      {imageOn && <figure>【画像】</figure>}
    </div>
  )
}