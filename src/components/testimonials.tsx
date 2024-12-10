import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface TestimonialProps {
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export function Testimonial({ name, role, content, avatar }: TestimonialProps) {
  return (
    <Card className="bg-white dark:bg-gray-800 shadow-lg rounded-lg">
      <CardContent className="p-6">
        <div className="flex items-center space-x-4 mb-4">
          <Avatar>
            <AvatarImage src={avatar} alt={name} />
            <AvatarFallback>{name.split(' ').map((n) => n[0]).join('')}</AvatarFallback>
          </Avatar>
          <div>
            <h4 className="font-semibold text-lg">{name}</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">{role}</p>
          </div>
        </div>
        <p className="text-gray-600 dark:text-gray-300">{content}</p>
      </CardContent>
    </Card>
  );
}
