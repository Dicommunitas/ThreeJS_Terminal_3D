"use client";

import React from 'react';
import { useThreeScene } from '@/hooks/useThreeScene';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Trash2, Edit3 } from 'lucide-react'; // Edit3 for selection indication
import { cn } from '@/lib/utils';

export function ObjectList() {
  const { sceneObjects, selectedObject, selectObjectById, removeObjectById } = useThreeScene();

  if (!sceneObjects.length) {
    return <p className="p-2 text-sm text-muted-foreground">No objects in scene.</p>;
  }

  return (
    <ScrollArea className="h-full flex-grow p-2">
      <ul className="space-y-1">
        {sceneObjects.map((obj) => (
          <li
            key={obj.id}
            className={cn(
              "flex items-center justify-between p-2 rounded-md text-sm hover:bg-accent/50 cursor-pointer",
              selectedObject?.id === obj.id && "bg-accent text-accent-foreground"
            )}
            onClick={() => selectObjectById(obj.id)}
          >
            <span className="truncate" title={obj.name}>{obj.name} ({obj.type})</span>
            <div className="flex items-center gap-1">
              {selectedObject?.id === obj.id && <Edit3 className="h-3 w-3 text-primary" />}
              <Button
                variant="ghost"
                size="icon"
                className="h-6 w-6"
                onClick={(e) => {
                  e.stopPropagation(); // Prevent selection when deleting
                  removeObjectById(obj.id);
                }}
                aria-label={`Delete ${obj.name}`}
              >
                <Trash2 className="h-3 w-3" />
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </ScrollArea>
  );
}
