
export default function Skill({ title, skills }) {
  return (
    <div className="px-2">
      <p className="font-bold pb-2">{title}</p>
      <p>{skills}</p>
    </div>
  )
}