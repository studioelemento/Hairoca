import img1 from '../assets/whychoose/controls-hair-fall.png';
import img2 from '../assets/whychoose/promotes-faster-hair-growth.png';
import img3 from '../assets/whychoose/prevents-premature-greying.png';
import img4 from '../assets/whychoose/fights-dandruff-and-scalp-issues.png';
import img5 from '../assets/whychoose/100-percent-natural.png';

export default function Benefits() {
  const benefitsList = [
    { text: 'Controls Hair Fall', image: img1 },
    { text: 'Promotes Faster Hair Growth', image: img2 },
    { text: 'Prevents Premature Graying', image: img3 },
    { text: 'Fights Dandruff & Scalp Issues', image: img4 },
    { text: '100% Herbal & Safe', image: img5 }
  ];

  return (
    <section id="benefits">
      <div className="container" style={{ textAlign: 'center' }}>
        <h2 className="serif-heading">Why Choose Hairoca Hair Oil...?</h2>
        <div className="benefits-grid">
          {benefitsList.map((item, i) => (
            <div className="benefit-card" key={i}>
              <div className="benefit-img-wrapper">
                <img src={item.image} alt={item.text} />
              </div>
              <div className="benefit-caption">
                <span className="benefit-pill">✔</span>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
