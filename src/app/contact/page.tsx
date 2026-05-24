import { Metadata } from "next";
import ContactClientPage from "./ContactClientPage";

export const metadata: Metadata = {
  title: "Contact Us | Team Arion Racing",
  description:
    "Get in touch with Team Arion — for sponsorship opportunities, technical collaborations, media inquiries, or to join our Formula Student journey.",
};

export default function ContactPage() {
  return <ContactClientPage />;
}
