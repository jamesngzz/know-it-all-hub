
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, BookOpen, Plus, User } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-brand-purple" />
            <span className="hidden font-bold text-xl sm:inline-block">Know-It-All Hub</span>
          </Link>
        </div>
        
        <div className="hidden md:flex md:w-1/3 lg:w-1/2 relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search saved resources..."
            className="w-full pl-10"
          />
        </div>
        
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="md:hidden" aria-label="Search">
            <Search className="h-5 w-5" />
          </Button>
          
          <Button variant="outline" size="sm" className="hidden md:flex gap-1">
            <Plus className="h-4 w-4" />
            Add Resource
          </Button>
          
          <Button variant="ghost" size="icon" className="rounded-full" aria-label="Profile">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}
