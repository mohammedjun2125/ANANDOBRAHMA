import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { menu, signatureDishes } from '@/lib/constants';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Star } from 'lucide-react';

function MenuItem({
  name,
  description,
  price,
  isSpecial,
  imageId,
}: {
  name: string;
  description: string;
  price: string;
  isSpecial: boolean;
  imageId: string;
}) {
  const image = PlaceHolderImages.find((img) => img.id === imageId);
  return (
    <Card className="flex flex-col h-full overflow-hidden border-2 border-border/50 hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-1 group">
      {image && (
        <div className="aspect-video relative overflow-hidden">
          <Image
            src={image.imageUrl}
            alt={name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            data-ai-hint={image.imageHint}
          />
        </div>
      )}
      <CardHeader>
        <div className="flex justify-between items-start gap-4">
          <CardTitle className="text-xl font-headline">{name}</CardTitle>
          <div className="text-lg font-semibold text-primary">${price}</div>
        </div>
        {isSpecial && (
          <Badge variant="secondary" className="bg-primary/20 text-primary-foreground border-primary/50 w-fit">
            <Star className="w-3 h-3 mr-1.5" />
            Chef's Special
          </Badge>
        )}
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground text-sm">{description}</p>
      </CardContent>
    </Card>
  );
}

export default function MenuPage() {
  return (
    <div className="animate-fade-in-up">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary">
          Our Menu
        </h1>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          A curated selection of dishes crafted with the finest ingredients and culinary passion.
        </p>
        
        {/* Recommended for You Section */}
        <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Personalized Recommendations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {signatureDishes.slice(0,3).map((dish) => {
                const dishImage = PlaceHolderImages.find((img) => img.id === dish.imageId);
                return (
                  <Card key={dish.name} className="overflow-hidden border-2 border-primary/30 bg-secondary/20 hover:border-primary/60 transition-all duration-300 transform hover:-translate-y-2 group">
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
                      <CardTitle className="text-2xl font-headline mb-2">{dish.name}</CardTitle>
                      <p className="text-muted-foreground">{dish.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
        </div>


        <Tabs defaultValue="appetizers" className="w-full">
          <TabsList className="grid w-full grid-cols-3 max-w-lg mx-auto h-auto">
            <TabsTrigger value="appetizers" className="py-2.5">Appetizers</TabsTrigger>
            <TabsTrigger value="main-courses" className="py-2.5">Main Courses</TabsTrigger>
            <TabsTrigger value="desserts" className="py-2.5">Desserts</TabsTrigger>
          </TabsList>
          
          <TabsContent value="appetizers" className="mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {menu.appetizers.map((item) => (
                <MenuItem key={item.name} {...item} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="main-courses" className="mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {menu.mainCourses.map((item) => (
                <MenuItem key={item.name} {...item} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="desserts" className="mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {menu.desserts.map((item) => (
                <MenuItem key={item.name} {...item} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
