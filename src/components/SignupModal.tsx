
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { Eye, EyeOff, User, Mail, Lock, Plus, X } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface SignupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SignupModal = ({ isOpen, onClose }: SignupModalProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    bio: ""
  });
  const [skills, setSkills] = useState<string[]>([]);
  const [newSkill, setNewSkill] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const addSkill = () => {
    if (newSkill.trim() && !skills.includes(newSkill.trim())) {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill("");
    }
  };

  const removeSkill = (skillToRemove: string) => {
    setSkills(skills.filter(skill => skill !== skillToRemove));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addSkill();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          emailRedirectTo: `${window.location.origin}/`,
          data: {
            first_name: formData.firstName,
            last_name: formData.lastName,
            bio: formData.bio,
            skills: skills
          }
        }
      });

      if (error) {
        toast({
          title: "Signup Error",
          description: error.message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Success",
          description: "Account created successfully! Please check your email to verify your account.",
        });
        onClose();
      }
    } catch (error) {
      toast({
        title: "Signup Error",
        description: "An unexpected error occurred",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const popularSkills = [
    "JavaScript", "Python", "Guitar", "French", "Cooking", "Photography", 
    "Yoga", "Drawing", "Marketing", "Writing", "Spanish", "Piano"
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Join SkillSwap Community
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          {/* Personal Information */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  id="firstName"
                  name="firstName"
                  placeholder="Your first name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="pl-10"
                  required
                  disabled={isLoading}
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  id="lastName"
                  name="lastName"
                  placeholder="Your last name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="pl-10"
                  required
                  disabled={isLoading}
                />
              </div>
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleInputChange}
                className="pl-10"
                required
                disabled={isLoading}
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Create a strong password"
                value={formData.password}
                onChange={handleInputChange}
                className="pl-10 pr-10"
                required
                disabled={isLoading}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
                disabled={isLoading}
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4 text-gray-400" />
                ) : (
                  <Eye className="h-4 w-4 text-gray-400" />
                )}
              </button>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="bio">Bio (Optional)</Label>
            <Textarea
              id="bio"
              name="bio"
              placeholder="Tell us about yourself and your interests..."
              value={formData.bio}
              onChange={handleInputChange}
              rows={3}
              disabled={isLoading}
            />
          </div>

          {/* Skills Section */}
          <div className="space-y-4">
            <Label className="text-base font-semibold">Your Skills</Label>
            <p className="text-sm text-gray-600">
              Add skills you can teach or help others with. You can always update these later.
            </p>
            
            {/* Add Skill Input */}
            <div className="flex gap-2">
              <Input
                placeholder="Type a skill (e.g., Guitar, Python, French)"
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)}
                onKeyPress={handleKeyPress}
                className="flex-1"
                disabled={isLoading}
              />
              <Button
                type="button"
                onClick={addSkill}
                disabled={!newSkill.trim() || isLoading}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>

            {/* Popular Skills */}
            <div>
              <p className="text-sm text-gray-600 mb-2">Or choose from popular skills:</p>
              <div className="flex flex-wrap gap-2">
                {popularSkills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="cursor-pointer hover:bg-blue-100 hover:text-blue-700 transition-colors"
                    onClick={() => {
                      if (!skills.includes(skill) && !isLoading) {
                        setSkills([...skills, skill]);
                      }
                    }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Selected Skills */}
            {skills.length > 0 && (
              <div>
                <p className="text-sm font-medium mb-2">Your selected skills:</p>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge
                      key={skill}
                      className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 border border-blue-200"
                    >
                      {skill}
                      <button
                        type="button"
                        onClick={() => removeSkill(skill)}
                        className="ml-2 hover:text-red-600"
                        disabled={isLoading}
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            disabled={isLoading}
          >
            {isLoading ? "Creating Account..." : "Create My Account"}
          </Button>
          
          <div className="text-center text-sm text-gray-600">
            Already have an account?{" "}
            <button
              type="button"
              onClick={onClose}
              className="text-blue-600 hover:underline font-medium"
              disabled={isLoading}
            >
              Sign in here
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default SignupModal;
