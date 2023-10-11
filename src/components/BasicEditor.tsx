"use client";

import React, { useEffect, useRef } from "react";
import { CommentsProvider } from "@udecode/plate-comments";
import { Plate, TElement, Value } from "@udecode/plate-common";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { commentsUsers, myUserId } from "@/lib/plate/comments";
import { plugins } from "@/lib/plate/plate-plugins";
import { cn } from "@/lib/utils";
import { CursorOverlay } from "@/components/ui/plate/cursor-overlay";
import { Editor } from "@/components/ui/plate/editor";
import { FixedToolbar } from "@/components/ui/plate/fixed-toolbar";
import { FixedToolbarButtons } from "@/components/ui/plate/fixed-toolbar-buttons-simple";
import { FloatingToolbar } from "@/components/ui/plate/floating-toolbar";
import { FloatingToolbarButtons } from "@/components/ui/plate/floating-toolbar-buttons";
import initialEditorValue from "@/lib/constants/initialEditorValue";
import { ArticleByIdType } from "@/types/article";

interface PlateEditorProps {
  initialData?: ArticleByIdType;
  value: Value;
  onChange: (value: Value) => void;
}

export default function PlateEditor({ initialData, onChange, value }: PlateEditorProps) {
  const containerRef = useRef(null);
  return (
    <div className="px-2">
      <DndProvider backend={HTML5Backend}>
        <CommentsProvider users={commentsUsers} myUserId={myUserId}>
          <Plate
          value={value}
          onChange={(newValue) => {
            onChange(newValue)
          }}
          plugins={plugins} initialValue={initialEditorValue}>
            <div
              ref={containerRef}
              className={cn(
                "h-full",
                // Block selection
                // '[&_.slate-start-area-left]:!w-[64px] [&_.slate-start-area-right]:!w-[64px] [&_.slate-start-area-top]:!h-4 editor-wrap'
              )}
            >
              <FixedToolbar>
                <FixedToolbarButtons />
              </FixedToolbar>

              <Editor
                className="px-[20px] min-h-[calc(100vh-200px)] pt-8 pb-16"
                focusRing={false}
                variant="ghost"
                size="md"
              />

              <FloatingToolbar>
                <FloatingToolbarButtons />
              </FloatingToolbar>

              {/* <MentionCombobox items={MENTIONABLES} /> */}

              {/* <CommentsPopover /> */}

              <CursorOverlay containerRef={containerRef} />
            </div>
          </Plate>
        </CommentsProvider>
      </DndProvider>
    </div>
  );
}