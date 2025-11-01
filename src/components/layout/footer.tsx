import Link from 'next/link';
import { FacebookIcon, InstagramIcon, Logo, TwitterIcon } from '@/components/icons';
import { Separator } from '@/components/ui/separator';

export function Footer() {
  return (
    <footer className="bg-secondary/20 border-t border-border/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="mb-4 inline-block">
              <Logo className="h-10 text-primary fill-primary" />
            </Link>
            <p className="text-muted-foreground text-sm">
              Experience elegance and sophistication in fine dining.
            </p>
          </div>

          <div>
            <h3 className="font-headline text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/menu" className="text-muted-foreground hover:text-primary transition-colors">Menu</Link></li>
              <li><Link href="/reservations" className="text-muted-foreground hover:text-primary transition-colors">Reservations</Link></li>
              <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-headline text-lg font-semibold mb-4">Contact Us</h3>
            <address className="not-italic text-muted-foreground space-y-2 text-sm">
              <p>123 Luxury Lane, Foodie City, 54321</p>
              <p>Email: <a href="mailto:contact@anandobrahma.com" className="hover:text-primary">contact@anandobrahma.com</a></p>
              <p>Phone: <a href="tel:+1234567890" className="hover:text-primary">(123) 456-7890</a></p>
            </address>
          </div>

          <div>
            <h3 className="font-headline text-lg font-semibold mb-4">Opening Hours</h3>
            <div className="text-muted-foreground text-sm space-y-1">
              <p>Mon - Fri: 6pm - 11pm</p>
              <p>Sat - Sun: 5pm - 12am</p>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-border/50" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} ANANDOBRAHMA. All rights reserved.</p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary transition-colors"><FacebookIcon className="h-5 w-5" /></a>
            <a href="#" className="hover:text-primary transition-colors"><InstagramIcon className="h-5 w-5" /></a>
            <a href="#" className="hover:text-primary transition-colors"><TwitterIcon className="h-5 w-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
