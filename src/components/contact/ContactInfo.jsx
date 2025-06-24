import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import SocialLinks from "./SocialLinks";

export default function ContactInfo() {
  return (
    <Card
      data-aos="fade-right"
      data-aos-duration="1000"
      className="bg-[#130a24] border-[#1e1038] hover:border-[#2e1c58] transition-colors"
    >
      <CardHeader>
        <CardTitle className="text-xl text-white">Contact Information</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center gap-4">
          <div className="p-2 mt-1 rounded-lg bg-blue-900/20">
            <MapPin className="w-5 h-5 text-blue-400" />
          </div>
          <div>
            <h3 className="pb-1 font-medium text-gray-300">Location</h3>
            <p className="text-[#A4A4A4]">Dhaka, Bangladesh</p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <div className="p-2 mt-1 rounded-lg bg-purple-900/20">
            <Mail className="w-5 h-5 text-purple-400" />
          </div>
          <div>
            <h3 className="pb-1 font-medium text-gray-300">Email</h3>
            <p className="text-gray-400 break-words">AlexRobert@gmail.com</p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <div className="p-2 mt-1 rounded-lg bg-green-900/20">
            <Phone className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="pb-1 font-medium text-gray-300">Phone</h3>
            <p className="text-gray-400">+880-151-653-9184</p>
          </div>
        </div>
        <div className="pt-10">
          <SocialLinks />
        </div>
      </CardContent>
    </Card>
  );
}
