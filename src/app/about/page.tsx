import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function AboutPage() {
  const interiorImage = PlaceHolderImages.find((img) => img.id === 'about-interior-1');
  const chefImage = PlaceHolderImages.find((img) => img.id === 'about-chef-1');
  
  return (
    <div className="animate-fade-in-up">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary">
          Our Story
        </h1>

        <div className="max-w-4xl mx-auto text-lg text-muted-foreground leading-relaxed">
          <p className="mb-6">
            ANANDOBRAHMA was born from a vision to create more than just a place to eat, but a sanctuary for the senses. Our name, derived from ancient Sanskrit, translates to "food is the ultimate reality" or "the divinity of food." This philosophy is the cornerstone of our existence, guiding every dish we create and every experience we offer.
          </p>
          <p className="mb-6">
            Our journey began with our founder, a world-traveled culinary artist who sought to bring together global techniques with the soulful essence of traditional cooking. The goal was simple yet ambitious: to craft a menu that tells a story, where each ingredient is honored and every flavor profile is a carefully composed note in a grand symphony.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center my-16">
          {interiorImage && (
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <Image
                src={interiorImage.imageUrl}
                alt={interiorImage.description}
                width={800}
                height={600}
                className="object-cover w-full"
                data-ai-hint={interiorImage.imageHint}
              />
            </div>
          )}
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">A Haven of Elegance</h2>
            <p className="text-muted-foreground leading-relaxed">
              The design of ANANDOBRAHMA is a tribute to timeless sophistication. We believe that the environment is as crucial to the dining experience as the food itself. Our interiors blend modern minimalism with opulent, golden accents, creating a warm, inviting, and luxurious atmosphere. Every detail, from the ambient lighting to the custom-made furniture, has been chosen to ensure your comfort and delight.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center my-16">
          <div className="space-y-4 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold">Meet Our Chef</h2>
            <p className="text-muted-foreground leading-relaxed">
              At the heart of our kitchen is our esteemed Head Chef, a visionary with a passion for culinary innovation. With decades of experience in Michelin-starred restaurants across the globe, our chef brings a unique perspective to our menu, blending classic discipline with a flair for the extraordinary. His commitment to sourcing the finest, freshest ingredients is paramount, ensuring that every plate served is a true expression of quality and creativity.
            </p>
          </div>
          {chefImage && (
            <div className="rounded-lg overflow-hidden shadow-2xl md:order-1">
              <Image
                src={chefImage.imageUrl}
                alt={chefImage.description}
                width={600}
                height={800}
                className="object-cover w-full"
                data-ai-hint={chefImage.imageHint}
              />
            </div>
          )}
        </div>

        <div className="text-center mt-20">
            <h2 className="text-3xl font-bold mb-4">Join Us for an Unforgettable Experience</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                We invite you to be part of our story and create your own memorable moments at ANANDOBRAHMA.
            </p>
            <Button asChild size="lg">
                <Link href="/reservations">Reserve Your Table</Link>
            </Button>
        </div>
      </div>
    </div>
  );
}
