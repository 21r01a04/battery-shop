export default function RatingStars({value=4}){
  const full = Math.floor(value)
  const half = value - full >= 0.5
  const stars = Array.from({length:5}).map((_,i)=>{
    if(i < full) return '★'
    if(i === full && half) return '☆'
    return '✩'
  }).join(' ')
  return <span className="text-yellow-500">{stars}</span>
}