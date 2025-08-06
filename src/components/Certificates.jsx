import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const certificates = [
  {
    title: "React Developer Certification",
    issuer: "Meta",
    date: "March 2024",
    credentialId: "ABC123456",
    skills: ["React", "JSX", "Hooks", "State Management"],
    description:
      "Comprehensive certification covering React fundamentals and advanced concepts.",
  },
  {
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "January 2024",
    credentialId: "AWS-CP-789",
    skills: ["Cloud Computing", "AWS Services", "Security", "Architecture"],
    description:
      "Foundational certification in cloud computing and AWS services.",
  },
  {
    title: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    date: "November 2023",
    credentialId: "FCC-JS-101",
    skills: [
      "JavaScript",
      "Algorithms",
      "Data Structures",
      "Problem Solving",
    ],
    description:
      "300+ hours of coursework covering JavaScript fundamentals and computer science concepts.",
  },
];

const Certificates = () => {
  return (
    <div className="min-h-screen px-4 py-10 md:px-8 bg-background text-foreground">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto"
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-10">📜 Certificates</h1>

        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.credentialId}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-muted transition-shadow hover:shadow-xl">
                <CardHeader>
                  <CardTitle className="text-primary text-lg">
                    {cert.title}
                  </CardTitle>
                  <CardDescription className="flex items-center justify-between">
                    <span className="font-medium">{cert.issuer}</span>
                    <Badge variant="secondary">{cert.date}</Badge>
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4 text-sm">
                  <p className="text-muted-foreground">{cert.description}</p>

                  <div>
                    <h4 className="font-semibold mb-2">Skills Covered:</h4>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill) => (
                        <Badge key={skill} variant="outline">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="text-xs text-muted-foreground pt-2">
                    <span className="font-semibold">Credential ID:</span>{" "}
                    {cert.credentialId}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Certificates;
