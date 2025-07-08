
import { Button } from "@/components/ui/button";
import { Card, from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Users, BookOpen, Calendar, Star, Globe, Shield } from "lucide-react";
import { useState } from "react";
import LoginModal from "@/components/LoginModal";
import SignupModal from "@/components/SignupModal";

const Index = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const skillCategories = [
    "Programming", "Languages", "Music", "Cooking", "Art", "Photography", 
    "Fitness", "Writing", "Design", "Crafts", "Business", "Marketing"
  ];

  const features = [
    {
      icon: Users,
      title: "Smart Matching",
      description: "Connect with perfect skill swap partners based on your interests and availability"
    },
    {
      icon: BookOpen,
      title: "Learn & Teach",
      description: "Share your expertise while discovering new skills from our vibrant community"
    },
    {
      icon: Calendar,
      title: "Easy Scheduling",
      description: "Built-in calendar integration makes planning your skill sessions effortless"
    },
    {
      icon: Star,
      title: "Trust & Reviews",
      description: "Build your reputation through community ratings and verified skill exchanges"
    },
    {
      icon: Globe,
      title: "Global Community",
      description: "Connect locally for in-person learning or join our worldwide online community"
    },
    {
      icon: Shield,
      title: "Safe & Secure",
      description: "Identity verification and community guidelines ensure a trusted learning environment"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">SS</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                SkillSwap
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost" 
                onClick={() => setShowLogin(true)}
                className="hover:bg-blue-50"
              >
                Log In
              </Button>
              <Button 
                onClick={() => setShowSignup(true)}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-6 bg-blue-100 text-blue-700 border-blue-200">
                🌟 Join 50,000+ Skill Swappers Worldwide
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Trade Skills,
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {" "}Build Community
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Connect with passionate learners and teachers in your community. 
                Share what you know, learn what you love, and grow together through 
                the power of skill exchange.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button 
                  size="lg"
                  onClick={() => setShowSignup(true)}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  Start Swapping Skills
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => setShowLogin(true)}
                  className="border-2 hover:bg-blue-50"
                >
                  Explore Community
                </Button>
              </div>
              <div className="flex flex-wrap gap-2">
                {skillCategories.slice(0, 6).map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="secondary" 
                    className="bg-white/50 hover:bg-white/80 transition-colors cursor-pointer"
                  >
                    {skill}
                  </Badge>
                ))}
                <Badge variant="secondary" className="bg-white/30">
                  +200 more
                </Badge>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4 animate-fade-in">
                <img 
                  src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=300&fit=crop&auto=format" 
                  alt="People collaborating and learning"
                  className="rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 hover:scale-105 transform transition-transform"
                />
                <img 
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop&auto=format" 
                  alt="Collaborative workspace"
                  className="rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 hover:scale-105 transform transition-transform mt-8"
                />
                <img 
                  src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=400&h=300&fit=crop&auto=format" 
                  alt="Creative learning"
                  className="rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 hover:scale-105 transform transition-transform -mt-8"
                />
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop&auto=format" 
                  alt="Technology and learning"
                  className="rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 hover:scale-105 transform transition-transform"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-3xl blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose SkillSwap?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform makes skill sharing safe, fun, and rewarding for everyone in our community
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="p-6 hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm hover:scale-105 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:from-blue-200 group-hover:to-purple-200 transition-colors">
                  <feature.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your Skill Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of learners and teachers who are already transforming their lives through skill exchange
          </p>
          <Button 
            size="lg"
            onClick={() => setShowSignup(true)}
            className="bg-white text-blue-600 hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Create Your Profile Today
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">SS</span>
              </div>
              <span className="text-2xl font-bold">SkillSwap</span>
            </div>
            <p className="text-gray-400">
              © 2024 SkillSwap. Building communities through shared learning.
            </p>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <LoginModal isOpen={showLogin} onClose={() => setShowLogin(false)} />
      <SignupModal isOpen={showSignup} onClose={() => setShowSignup(false)} />
    </div>
  );
};

export default Index;
