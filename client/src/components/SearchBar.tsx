import { useState } from "react";
import { Search, X } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
  initialValue?: string;
}

export default function SearchBar({ onSearch, placeholder = "Search...", initialValue = "" }: SearchBarProps) {
  const [query, setQuery] = useState(initialValue);
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query.trim());
  };

  const handleClear = () => {
    setQuery("");
    onSearch("");
  };

  return (
    <motion.form 
      onSubmit={handleSubmit} 
      className="relative max-w-md"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className={`relative flex items-center border rounded-lg bg-white transition-all duration-200 ${
        isFocused ? 'border-blue-500 ring-2 ring-blue-500/20' : 'border-gray-300 hover:border-gray-400'
      }`}>
        <Search className="w-4 h-4 text-gray-400 ml-3" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          className="flex-1 px-3 py-2 text-sm bg-transparent border-0 focus:outline-none placeholder-gray-500"
        />
        {query && (
          <motion.button
            type="button"
            onClick={handleClear}
            className="p-1 mr-2 text-gray-400 hover:text-gray-600 transition-colors"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
          >
            <X className="w-4 h-4" />
          </motion.button>
        )}
        <Button 
          type="submit" 
          size="sm" 
          className="mr-1 bg-blue-600 hover:bg-blue-700 text-white px-3"
          disabled={!query.trim()}
        >
          Search
        </Button>
      </div>
    </motion.form>
  );
}