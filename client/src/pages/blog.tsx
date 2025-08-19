import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Blog() {
  const featuredPost = {
    title: "The Future of JSON: How AI is Transforming Data Structure Creation",
    excerpt: "Explore how artificial intelligence is revolutionizing the way developers work with JSON and structured data formats.",
    author: "Alex Johnson",
    date: "2025-01-15",
    readTime: "8 min read",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=400&fit=crop",
    href: "/blog/future-of-json-ai"
  };

  const posts = [
    {
      title: "Best Practices for JSON Schema Design",
      excerpt: "Learn the essential principles for creating maintainable and scalable JSON schemas.",
      author: "Sarah Chen",
      date: "2025-01-12",
      readTime: "5 min read",
      category: "Tutorial",
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=250&fit=crop",
      href: "/blog/json-schema-best-practices"
    },
    {
      title: "Converting Complex Requirements to JSON: A Developer's Guide",
      excerpt: "Step-by-step guide to transform complex business requirements into structured JSON formats.",
      author: "Mike Rodriguez",
      date: "2025-01-10",
      readTime: "6 min read",
      category: "Guide",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      href: "/blog/complex-requirements-to-json"
    },
    {
      title: "API Design Patterns with JSON",
      excerpt: "Discover proven patterns for designing RESTful APIs with consistent JSON structures.",
      author: "Alex Johnson",
      date: "2025-01-08",
      readTime: "7 min read",
      category: "API Design",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop",
      href: "/blog/api-design-patterns-json"
    },
    {
      title: "JSON Validation: Tools and Techniques",
      excerpt: "Comprehensive overview of JSON validation tools and best practices for error-free data.",
      author: "Sarah Chen",
      date: "2025-01-05",
      readTime: "4 min read",
      category: "Tools",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop",
      href: "/blog/json-validation-tools"
    },
    {
      title: "Performance Optimization for JSON Processing",
      excerpt: "Tips and tricks to optimize JSON parsing and generation in your applications.",
      author: "Mike Rodriguez",
      date: "2025-01-03",
      readTime: "6 min read",
      category: "Performance",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=250&fit=crop",
      href: "/blog/json-performance-optimization"
    },
    {
      title: "Building Better Developer Tools: Lessons from JSON Converter",
      excerpt: "Behind-the-scenes look at building developer-focused tools and user experience design.",
      author: "Alex Johnson",
      date: "2025-01-01",
      readTime: "9 min read",
      category: "Product",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=250&fit=crop",
      href: "/blog/building-developer-tools"
    }
  ];

  const categories = ["All", "Technology", "Tutorial", "Guide", "API Design", "Tools", "Performance", "Product"];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white border-b">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="outline" className="mb-4">
              Developer Blog
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Insights & Tutorials
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Stay updated with the latest trends in JSON, API design, and developer tools. 
              Learn from our team's experience building tools for the developer community.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Card className="overflow-hidden border-0 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-blue-600 text-white">
                    Featured
                  </Badge>
                </div>
              </div>
              <CardContent className="p-8 lg:p-12">
                <div className="flex items-center gap-4 mb-4">
                  <Badge variant="outline">{featuredPost.category}</Badge>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(featuredPost.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {featuredPost.title}
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{featuredPost.author}</span>
                  </div>
                  <Link href={featuredPost.href}>
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      Read Article
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                size="sm"
                className={category === "All" ? "bg-blue-600 hover:bg-blue-700" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Card key={post.href} className="overflow-hidden border-0 shadow-sm hover:shadow-md transition-shadow">
                <div className="relative h-48">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <Badge variant="outline" className="text-xs">
                      {post.category}
                    </Badge>
                    <div className="flex items-center gap-3 text-xs text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </div>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <User className="w-3 h-3 text-gray-400" />
                      <span className="text-xs text-gray-600">{post.author}</span>
                    </div>
                    <Link href={post.href}>
                      <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700">
                        Read More
                        <ArrowRight className="w-3 h-3 ml-1" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-blue-600 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Get the latest insights on JSON, API design, and developer tools delivered to your inbox.
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border-0 text-gray-900 placeholder-gray-500"
              />
              <Button variant="secondary" size="lg">
                Subscribe
              </Button>
            </div>
            <p className="text-xs text-blue-200 mt-4">
              No spam, unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}