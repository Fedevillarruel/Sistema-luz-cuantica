'use client';

import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { REGIONS } from '@/config/regions';
import type { Region } from '@/types';
import { cn } from '@/lib/utils';

interface RegionSelectorProps {
  currentRegion: Region;
  onRegionChange: (region: Region) => void;
}

export function RegionSelector({ currentRegion, onRegionChange }: RegionSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const config = REGIONS[currentRegion];

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg border border-quantum-cyan/30 bg-quantum-dark hover:bg-quantum-cyan/10 transition-colors text-sm"
        aria-label="Seleccionar región"
      >
        <span className="text-lg">{config.flag}</span>
        <span className="hidden sm:inline">{config.name}</span>
        <span className="font-mono text-quantum-cyan">{config.currency}</span>
        <ChevronDown className={cn('h-4 w-4 transition-transform', isOpen && 'rotate-180')} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-quantum-dark border border-quantum-cyan/30 rounded-lg shadow-lg shadow-quantum-cyan/10 z-50 overflow-hidden">
          {Object.values(REGIONS).map((region) => (
            <button
              key={region.code}
              onClick={() => {
                onRegionChange(region.code);
                setIsOpen(false);
              }}
              className={cn(
                'w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-quantum-cyan/10 transition-colors border-b border-quantum-cyan/10 last:border-b-0',
                region.code === currentRegion && 'bg-quantum-cyan/20'
              )}
            >
              <span className="text-2xl">{region.flag}</span>
              <div className="flex-1">
                <div className="text-sm font-medium text-white">{region.name}</div>
                <div className="text-xs text-gray-400">{region.currency}</div>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
