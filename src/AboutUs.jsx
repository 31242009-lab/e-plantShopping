
function AboutUs({ compact = false }) {
  return (
    <div className={`about-us-container ${compact ? "about-compact" : ""}`}>
      <p className="eyebrow">Our roots</p>

      <h2>
        Plants with <em>purpose.</em>
      </h2>

      <p>
        Paradise Nursery is a plant shopping company dedicated to helping
        people create beautiful, calm, and greener living spaces.
      </p>

      <p>
        We offer a wide variety of indoor and outdoor plants selected for
        their beauty, resilience, and ease of care. Our mission is to make
        plant shopping simple and enjoyable while helping customers bring
        more nature into their everyday lives.
      </p>

      <p>
        From beginner-friendly plants to unique varieties for experienced
        plant lovers, Paradise Nursery provides quality plants and useful
        information to help every customer find the perfect plant for their
        home or workspace.
      </p>
    </div>
  );
}

export default AboutUs;

