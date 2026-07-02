/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  description: string;
  challenge: string;
  process: string;
  results: string;
  tools: string[];
  coverImage: string;
  videoUrl: string;
  embedType: 'youtube' | 'vimeo' | 'native' | 'instagram';
  gallery: string[];
  stats: { label: string; value: string }[];
}

export interface ServicePlan {
  id: string;
  name: string;
  priceINR: number;
  priceUSD: number;
  description: string;
  features: string[];
  popular?: boolean;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  aspectRatio: 'portrait' | 'landscape' | 'square';
  location?: string;
  cameraSettings?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  project: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  details: string[];
}
