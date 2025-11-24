import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const reviews = [
    {
      name: "Mrs. Tan",
      location: "Serangoon",
      text: "We were nervous about hiring a helper for the first time, but the team at Amin Agency made it so easy. Our helper, Ani, is a blessing to our elderly mother. She is patient, kind, and very professional.",
      rating: 5,
    },
    {
      name: "Mr. James L.",
      location: "Tampines",
      text: "Professional, fast, and transparent. They found us a transfer helper within 3 days when we really needed help. The documentation was handled perfectly without any hassle.",
      rating: 5,
    },
    {
      name: "Sarah & David",
      location: "Bukit Timah",
      text: "The training they provide is real. Our helper came well-prepared for infant care and knew exactly how to handle hygiene standards. Highly recommend Amin Employment Agency!",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="section-padding bg-background">
      <div className="container mx-auto container-padding">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4">
            Stories from <span className="text-secondary">Happy Families</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Don't just take our word for it. Here's what our clients have to say about their experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-8 rounded-3xl border border-border shadow-sm hover:shadow-xl transition-all duration-300 relative">
              <Quote className="absolute top-8 right-8 w-10 h-10 text-secondary/20" />

              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-secondary fill-secondary" />
                ))}
              </div>

              <p className="text-foreground/80 italic mb-6 leading-relaxed">
                "{review.text}"
              </p>

              <div>
                <h4 className="font-heading font-bold text-primary text-lg">{review.name}</h4>
                <p className="text-sm text-muted-foreground">{review.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
