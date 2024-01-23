import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, link }) => {
  const organizers = [
    {
      img: "https://avatars.githubusercontent.com/u/10000000?v=4",
      name: "Jonathan Harris",
      past: "Full Stack Developer",
      coming: "Full Stack Developer",
      events: [
        {
          event1:'Tours',
          event2:'Talks',
          event3:'Conference',
        }
      ]
    }
  ]
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}
