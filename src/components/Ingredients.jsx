export default function Ingredients() {
  return (
    <section id="ingredients">
      <div className="container">
        <h2 className="serif-heading">Powered by Nature’s Best Ingredients</h2>
        <div className="ingredients-grid">
          {[
            { name: 'Brahmi', desc: 'Strengthens roots & improves scalp health' },
            { name: 'Aloe Vera', desc: 'Deep hydration & nourishment' },
            { name: 'Amla', desc: 'Boosts growth & prevents greying' },
            { name: 'Neelambari', desc: 'Helps retain natural black colour' },
            { name: 'Mylanchi', desc: 'Conditions & reduces breakage' },
            { name: 'Calendula', desc: 'Soothes scalp & fights dandruff' }
          ].map((ing) => (
            <div className="ingredient-card" key={ing.name}>
              <div className="ingredient-img-wrapper">
                <img src={`/ingredients/${ing.name}.png`} className="ingredient-img" alt={ing.name} />
              </div>
              <div>
                <h3>{ing.name}</h3>
                <p className="ingredient-desc">{ing.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
