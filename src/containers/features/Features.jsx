import React from 'react'
import './features.css'

import Feature from '../../components/feature/Feature.jsx'

const featuresData = [
  {
    title: "Improving end distrusts instantly",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris accumsan arcu non velit gravida, id.",
  },
  {
    title: "Become the tended activity",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris accumsan arcu non velit gravida, id.",
  },
  {
    title: "Message or an nothing",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris accumsan arcu non velit gravida, id.",
  },
  {
    title: "Really boy law country",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris accumsan arcu non velit gravida, id.",
  }
]

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">The Future Is Now and You Just Need To Realize It. Step Into The Future Today & Make It Happen.</h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
)

export default Features