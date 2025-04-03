
import React from 'react';
import ResourceCard from './ResourceCard';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Mock data for demonstration
const mockResources = [
  {
    id: '1',
    title: 'The Future of AI: Opportunities and Challenges',
    description: 'Artificial intelligence is rapidly transforming industries. This article explores the potential benefits and risks as AI becomes more integrated into our daily lives.',
    source: 'techinsights.com',
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995',
    date: 'Apr 1, 2025',
    categories: ['Article', 'Research'],
    hasSummary: true,
  },
  {
    id: '2',
    title: 'How to Build a Successful Remote Work Culture',
    description: 'As remote work becomes more common, organizations need to adapt their culture. Learn strategies for maintaining team cohesion and productivity in distributed teams.',
    source: 'hbr.org',
    imageUrl: 'https://images.unsplash.com/photo-1587614382346-4ec70e388b28',
    date: 'Mar 28, 2025',
    categories: ['Article'],
    hasSummary: false,
  },
  {
    id: '3',
    title: 'The Psychology of Habit Formation',
    description: 'Understanding how habits form and how to change them is crucial for personal development. This video breaks down the science behind habit loops.',
    source: 'youtube.com',
    imageUrl: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773',
    date: 'Mar 25, 2025',
    categories: ['Video'],
    hasSummary: true,
  },
  {
    id: '4',
    title: 'Financial Independence: A Step-by-Step Guide',
    description: 'Achieving financial independence requires planning and discipline. This podcast episode outlines practical steps anyone can take to improve their financial situation.',
    source: 'spotify.com',
    imageUrl: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e',
    date: 'Mar 20, 2025',
    categories: ['Podcast'],
    hasSummary: false,
  },
  {
    id: '5',
    title: 'Climate Change Solutions: Beyond Individual Actions',
    description: 'While personal choices matter, systemic changes are necessary to address climate change. This thread discusses policy approaches and technological innovations.',
    source: 'x.com',
    imageUrl: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05',
    date: 'Mar 15, 2025',
    categories: ['Thread', 'News'],
    hasSummary: false,
  },
  {
    id: '6',
    title: 'Machine Learning: From Theory to Practice',
    description: 'Bridging the gap between theoretical understanding and practical implementation in machine learning projects.',
    source: 'towardsdatascience.com',
    imageUrl: 'https://images.unsplash.com/photo-1555952494-efd681c7e3f9',
    date: 'Mar 10, 2025',
    categories: ['Article', 'Research'],
    hasSummary: true,
  },
];

export default function SavedResourcesList() {
  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-2xl font-semibold">Your Resources</h2>
        
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <Select defaultValue="newest">
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest First</SelectItem>
              <SelectItem value="oldest">Oldest First</SelectItem>
              <SelectItem value="a-z">A-Z</SelectItem>
              <SelectItem value="z-a">Z-A</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="mb-4 w-full sm:w-auto">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="article">Articles</TabsTrigger>
          <TabsTrigger value="video">Videos</TabsTrigger>
          <TabsTrigger value="podcast">Podcasts</TabsTrigger>
          <TabsTrigger value="summarized">Summarized</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockResources.map((resource) => (
              <ResourceCard key={resource.id} {...resource} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="article" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockResources
              .filter((resource) => resource.categories.includes('Article'))
              .map((resource) => (
                <ResourceCard key={resource.id} {...resource} />
              ))}
          </div>
        </TabsContent>
        
        <TabsContent value="video" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockResources
              .filter((resource) => resource.categories.includes('Video'))
              .map((resource) => (
                <ResourceCard key={resource.id} {...resource} />
              ))}
          </div>
        </TabsContent>
        
        <TabsContent value="podcast" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockResources
              .filter((resource) => resource.categories.includes('Podcast'))
              .map((resource) => (
                <ResourceCard key={resource.id} {...resource} />
              ))}
          </div>
        </TabsContent>
        
        <TabsContent value="summarized" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockResources
              .filter((resource) => resource.hasSummary)
              .map((resource) => (
                <ResourceCard key={resource.id} {...resource} />
              ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
