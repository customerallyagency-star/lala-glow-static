import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

const Reviews = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const reviewsPerPage = 6;

  const reviews = [
    {
      id: 1,
      name: "Sarah Mitchell",
      service: "Volume Lashes",
      rating: 5,
      date: "2024-01-15",
      text: "Absolutely incredible experience! My volume lashes look so natural yet dramatic. Lala is a true artist and made sure I was comfortable throughout the entire 3-hour process. The studio is immaculate and the results are beyond my expectations. I've received so many compliments!",
      verified: true
    },
    {
      id: 2,
      name: "Jennifer Lopez",
      service: "Brow Lamination",
      rating: 5,
      date: "2024-01-12",
      text: "I've been searching for the perfect brow lamination for months and finally found it at LALA Beauty! Sarah transformed my sparse, unruly brows into perfectly shaped, full brows that look amazing every morning. The results have lasted over 6 weeks and still look fresh.",
      verified: true
    },
    {
      id: 3,
      name: "Michelle Chen",
      service: "Anti-Aging Facial",
      rating: 5,
      date: "2024-01-10",
      text: "The anti-aging facial was pure luxury! Michelle was so knowledgeable about skincare and customized the treatment perfectly for my skin concerns. My skin looks brighter, feels firmer, and the fine lines around my eyes are noticeably reduced. Booking my next appointment!",
      verified: true
    },
    {
      id: 4,
      name: "Lisa Wang",
      service: "Classic Lashes",
      rating: 5,
      date: "2024-01-08",
      text: "Perfect for someone like me who wanted enhancement without the drama. The classic lashes look so natural that people think I just have naturally long, beautiful lashes. Lala listened to exactly what I wanted and delivered perfectly. Great retention too!",
      verified: true
    },
    {
      id: 5,
      name: "Amanda Thompson",
      service: "Gel Manicure",
      rating: 5,
      date: "2024-01-05",
      text: "Best gel manicure in Richmond! The attention to detail is incredible - perfect cuticle work, smooth application, and the color has lasted 3 weeks with no chips. Michelle's nail art skills are amazing too. The studio has such a relaxing atmosphere.",
      verified: true
    },
    {
      id: 6,
      name: "Jessica Kim",
      service: "Hybrid Lashes",
      rating: 5,
      date: "2024-01-03",
      text: "The hybrid lashes are perfect - not too natural, not too dramatic. Exactly what I was looking for! The application was comfortable and Lala explained everything throughout the process. It's been 4 weeks and they still look amazing. Highly recommend!",
      verified: true
    },
    {
      id: 7,
      name: "Rachel Lee",
      service: "Signature Facial",
      rating: 5,
      date: "2024-01-01",
      text: "What a way to start the new year! The signature facial was so relaxing and my skin has never looked better. Michelle analyzed my skin perfectly and used products that left my face glowing for days. The studio is beautiful and so clean. Will definitely be back!",
      verified: true
    },
    {
      id: 8,
      name: "Emily Davis",
      service: "Full Brow Design",
      rating: 5,
      date: "2023-12-28",
      text: "Complete brow transformation! Sarah is a brow wizard - she shaped, laminated, and tinted my brows to perfection. The mapping process was so thorough and the results are exactly what I dreamed of. No more daily brow makeup routine for me!",
      verified: true
    },
    {
      id: 9,
      name: "Samantha Park",
      service: "Luxury Pedicure",
      rating: 5,
      date: "2023-12-25",
      text: "Treated myself to the luxury pedicure and it was worth every penny! The foot massage was heavenly and my feet have never felt so soft. The polish application was flawless and has lasted beautifully. Such a relaxing experience in a gorgeous setting.",
      verified: true
    },
    {
      id: 10,
      name: "Grace Liu",
      service: "Volume Lashes",
      rating: 5,
      date: "2023-12-22",
      text: "I'm obsessed with my volume lashes! Lala created the perfect dramatic look for the holidays. The lashes look so full and fluffy, and I've gotten compliments everywhere I go. The quality is outstanding and they're lasting beautifully. LALA Beauty is the best!",
      verified: true
    },
    {
      id: 11,
      name: "Natalie Brown",
      service: "Acne Facial",
      rating: 5,
      date: "2023-12-20",
      text: "Struggled with breakouts for years and Michelle's acne facial has been a game-changer. She was so gentle with the extractions and gave me a customized skincare plan that actually works. My skin is clearer than it's been in months. Thank you!",
      verified: true
    },
    {
      id: 12,
      name: "Olivia Chang",
      service: "Classic Lashes",
      rating: 5,
      date: "2023-12-18",
      text: "Perfect natural enhancement! The classic lashes give me that effortless beauty I was looking for. No more mascara needed and I wake up looking put-together. Lala's technique is flawless and the studio atmosphere is so relaxing. Love coming here!",
      verified: true
    }
  ];

  const totalPages = Math.ceil(reviews.length / reviewsPerPage);
  const currentReviews = reviews.slice(
    currentPage * reviewsPerPage,
    (currentPage + 1) * reviewsPerPage
  );

  const overallRating = 5.0;
  const totalReviews = reviews.length;

  const serviceBreakdown = [
    { service: "Lash Extensions", count: 4, rating: 5.0 },
    { service: "Brow Services", count: 3, rating: 5.0 },
    { service: "Facial Treatments", count: 3, rating: 5.0 },
    { service: "Nail Services", count: 2, rating: 5.0 }
  ];

  return (
    <div className="min-h-screen pt-8">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-accent">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
            Client Reviews
          </h1>
          <p className="text-lg text-muted-foreground font-inter max-w-3xl mx-auto">
            Don't just take our word for it - read what our beautiful clients have to say 
            about their experience at LALA Beauty Secret Studio.
          </p>
        </div>
      </section>

      {/* Overall Rating */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="mb-12 shadow-medium">
              <CardContent className="p-8 text-center">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <div className="text-4xl font-playfair font-bold text-primary">
                    {overallRating}
                  </div>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
                <p className="text-lg font-inter text-muted-foreground mb-6">
                  Based on {totalReviews} verified reviews
                </p>

                {/* Service Breakdown */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  {serviceBreakdown.map((item, index) => (
                    <div key={index} className="text-center p-4 bg-accent/20 rounded-lg">
                      <div className="font-playfair font-semibold text-lg mb-1">
                        {item.service}
                      </div>
                      <div className="flex items-center justify-center gap-1 mb-1">
                        <Star className="w-4 h-4 fill-primary text-primary" />
                        <span className="font-inter text-sm">{item.rating}</span>
                      </div>
                      <div className="text-xs text-muted-foreground font-inter">
                        {item.count} reviews
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Reviews Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentReviews.map((review) => (
                <Card key={review.id} className="hover:shadow-medium transition-shadow">
                  <CardContent className="p-6">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="font-playfair font-semibold text-lg">
                          {review.name}
                        </h3>
                        <Badge variant="outline" className="text-xs mt-1">
                          {review.service}
                        </Badge>
                      </div>
                      {review.verified && (
                        <Badge className="bg-success text-success-foreground text-xs">
                          Verified
                        </Badge>
                      )}
                    </div>

                    {/* Rating & Date */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                        ))}
                      </div>
                      <span className="text-xs text-muted-foreground font-inter">
                        {new Date(review.date).toLocaleDateString()}
                      </span>
                    </div>

                    {/* Review Text */}
                    <p className="text-muted-foreground font-inter text-sm leading-relaxed">
                      "{review.text}"
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-4 mt-12">
                <Button
                  variant="outline"
                  onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
                  disabled={currentPage === 0}
                >
                  <ChevronLeft className="w-4 h-4 mr-2" />
                  Previous
                </Button>
                
                <div className="flex items-center gap-2">
                  {[...Array(totalPages)].map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentPage(i)}
                      className={`w-8 h-8 rounded-full text-sm font-inter transition-colors ${
                        currentPage === i
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-secondary hover:bg-accent'
                      }`}
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>

                <Button
                  variant="outline"
                  onClick={() => setCurrentPage(Math.min(totalPages - 1, currentPage + 1))}
                  disabled={currentPage === totalPages - 1}
                >
                  Next
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Leave Review CTA */}
      <section className="py-16 bg-accent/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
            Share Your Experience
          </h2>
          <p className="text-lg text-muted-foreground font-inter mb-8 max-w-2xl mx-auto">
            Had a wonderful experience at LALA Beauty? We'd love to hear about it! 
            Your feedback helps us continue to provide exceptional service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-primary hover:opacity-90 font-inter font-semibold"
              onClick={() => window.open('#', '_blank')}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Leave Google Review
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="font-inter font-semibold"
              onClick={() => window.open('#', '_blank')}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Review on Instagram
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-playfair font-bold mb-4">
            Ready to Experience 5-Star Service?
          </h2>
          <p className="text-muted-foreground font-inter mb-6 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who trust LALA Beauty with their beauty needs.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-gradient-primary hover:opacity-90 font-inter font-semibold"
          >
            <a href="/booking">Book Your Appointment</a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Reviews;