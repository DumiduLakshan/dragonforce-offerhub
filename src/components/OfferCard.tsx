import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface OfferCardProps {
  title: string;
  beforePrice: string;
  nowPrice: string;
  description: string[];
  configsAvailable: string;
}

const OfferCard = ({ title, beforePrice, nowPrice, description, configsAvailable }: OfferCardProps) => {
  const handleGetOffer = () => {
    const message = `I'm interested in the ${title} plan from DragonForce`;
    const whatsappUrl = `https://wa.me/94751267252?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Card className="hover-lift shadow-medium bg-gradient-card border-2 hover:border-primary/50 transition-all h-full flex flex-col">
      <CardHeader>
        <div className="flex justify-between items-start mb-2">
          <CardTitle className="text-xl font-bold text-foreground">{title}</CardTitle>
          <Badge variant="secondary" className="bg-accent text-accent-foreground">
            {configsAvailable}
          </Badge>
        </div>
        <CardDescription className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground line-through text-sm">{beforePrice}</span>
            <span className="text-2xl font-bold text-primary">{nowPrice}</span>
          </div>
        </CardDescription>
      </CardHeader>
      
      <CardContent className="flex-grow">
        <ul className="space-y-2">
          {description.map((item, index) => (
            <li key={index} className="flex items-start gap-2 text-sm">
              <span className="text-primary mt-1">✓</span>
              <span className="text-foreground/80">{item}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      
      <CardFooter>
        <Button 
          onClick={handleGetOffer}
          className="w-full bg-gradient-primary hover:opacity-90 transition-all"
        >
          Get Offer Now
        </Button>
      </CardFooter>
    </Card>
  );
};

export default OfferCard;