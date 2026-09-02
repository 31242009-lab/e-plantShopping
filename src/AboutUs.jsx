function AboutUs({ compact = false }) {
  return <section className={`about-section ${compact ? 'about-compact' : ''}`}><p className="eyebrow">Our roots</p><h2>Plants with<br /><em>purpose.</em></h2><p>Paradise Nursery makes it simple to create a calmer, greener home. Every plant is selected for its beauty, resilience, and ability to bring joy to daily rituals.</p></section>
}

export default AboutUs