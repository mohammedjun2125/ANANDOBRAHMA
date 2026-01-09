import Image from 'next/image';
import Link from 'next/link';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { signatureDishes, testimonials } from '@/lib/constants';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-1');
  const ambienceImage1 = PlaceHolderImages.find((img) => img.id === 'ambience-1');
  const ambienceImage2 = PlaceHolderImages.find((img) => img.id === 'ambience-2');
  const aboutImage = PlaceHolderImages.find((img) => img.id === 'about-interior-1');

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[60vh] md:h-[80vh] w-full flex items-center justify-center text-center text-white">
          {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              fill
              className="object-cover"
              data-ai-hint={heroImage.imageHint}
              priority
            />
          )}
          <div className="absolute inset-0 bg-black/70" />
          <div className="relative z-10 animate-fade-in-up space-y-4 p-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight uppercase text-white drop-shadow-[0_0_15px_hsl(var(--primary))]">
              ANANDOBRAHMA
            </h1>
            <p className="text-md sm:text-lg md:text-xl text-primary max-w-2xl mx-auto font-bold tracking-widest">
              THE FUTURE OF FINE DINING
            </p>
            <Button asChild size="lg" className="mt-6 font-bold shadow-[0_0_20px] shadow-primary/50 hover:shadow-primary/80 transition-all duration-300">
              <Link href="/reservations">Reserve a Table</Link>
            </Button>
          </div>
        </section>

        {/* Signature Dishes */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 uppercase tracking-wider">
              Signature Constructs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {signatureDishes.map((dish) => {
                const dishImage = PlaceHolderImages.find(
                  (img) => img.id === dish.imageId
                );
                return (
                  <Card key={dish.name} className="overflow-hidden border-2 border-border hover:border-primary transition-all duration-300 transform hover:-translate-y-2 group bg-card hover:shadow-[0_0_20px_hsl(var(--primary)/0.2)]">
                    <CardHeader className="p-0">
                      {dishImage && (
                        <div className="aspect-video relative overflow-hidden">
                          <Image
                            src={dishImage.imageUrl}
                            alt={dish.name}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                            data-ai-hint={dishImage.imageHint}
                          />
                        </div>
                      )}
                    </CardHeader>
                    <CardContent className="p-6">
                      <CardTitle className="text-xl md:text-2xl font-headline mb-2 uppercase">{dish.name}</CardTitle>
                      <p className="text-muted-foreground">{dish.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* About Us Summary */}
        <section className="py-16 lg:py-24 bg-secondary/30">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1 text-center md:text-left">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase tracking-wider">The Genesis of Anandobrahma</h2>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                            Anandobrahma is more than a restaurant; it's a celebration of heritage, flavor, and the joy of dining. Our philosophy is rooted in the ancient Indian concept of "food as the divine," where every meal is an offering of love and a path to contentment. We blend traditional recipes with contemporary techniques to create an unforgettable fine-dining experience.
                        </p>
                        <Button asChild variant="outline">
                            <Link href="/about">Discover Our Story <ArrowRight className="ml-2" /></Link>
                        </Button>
                    </div>
                    <div className="order-1 md:order-2">
                        {aboutImage && (
                            <div className="rounded-lg overflow-hidden shadow-2xl border-2 border-transparent hover:border-primary transition-all duration-500">
                                <Image
                                    src={aboutImage.imageUrl}
                                    alt={aboutImage.description}
                                    width={600}
                                    height={400}
                                    className="object-cover w-full h-full"
                                    data-ai-hint={aboutImage.imageHint}
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>


        {/* Ambience Section */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase tracking-wider">
              Engineered Atmosphere
            </h2>
            <p className="max-w-3xl mx-auto text-muted-foreground mb-12">
              Our interiors are meticulously designed to transport you to a world of sophisticated comfort, where every detail enhances your dining pleasure.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {ambienceImage1 && (
                 <div className="rounded-lg overflow-hidden shadow-lg aspect-video relative border-2 border-transparent hover:border-primary transition-all duration-500">
                    <Image src={ambienceImage1.imageUrl} alt={ambienceImage1.description} fill className="object-cover" data-ai-hint={ambienceImage1.imageHint}/>
                </div>
              )}
              {ambienceImage2 && (
                 <div className="rounded-lg overflow-hidden shadow-lg aspect-video relative border-2 border-transparent hover:border-primary transition-all duration-500">
                    <Image src={ambienceImage2.imageUrl} alt={ambienceImage2.description} fill className="object-cover" data-ai-hint={ambienceImage2.imageHint} />
                </div>
              )}
            </div>
          </div>
        </section>


        {/* Testimonials */}
        <section className="py-16 lg:py-24 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 uppercase tracking-wider">
              Transmissions from our Guests
            </h2>
            <Carousel
              opts={{
                align: 'start',
                loop: true,
              }}
              className="w-full max-w-4xl mx-auto"
            >
              <CarouselContent>
                {testimonials.map((testimonial, index) => {
                  const avatarImage = PlaceHolderImages.find(
                    (img) => img.id === testimonial.imageId
                  );
                  return (
                    <CarouselItem key={index} className="md:basis-1/2">
                      <div className="p-1">
                        <Card className="bg-card border-border/50 h-full">
                          <CardContent className="flex flex-col items-center justify-center p-6 md:p-8 text-center min-h-[280px]">
                            <p className="text-base md:text-lg italic mb-6 text-muted-foreground">
                              "{testimonial.quote}"
                            </p>
                            <div className="flex items-center">
                              {avatarImage && (
                                <Avatar className="h-12 w-12 mr-4 border-2 border-primary/50">
                                  <AvatarImage
                                    src={avatarImage.imageUrl}
                                    alt={testimonial.name}
                                    data-ai-hint={avatarImage.imageHint}
                                  />
                                  <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                                </Avatar>
                              )}
                              <div>
                                <p className="font-bold text-base uppercase tracking-widest">{testimonial.name}</p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>
          </div>
        </section>
      </main>
    </div>
  );
}
