
export default function Skill({ title, skills }) {
  return (
    <div>
      <p className="font-bold pb-2">{title}</p>
      <p>{skills}</p>
    </div>
  )
}