"use client";

import { ChangeEvent, useRef } from "react";

interface Props {
  previewUrl: string | null;
  onFileSelect: (file: File | null) => void;
}

export default function UploadProofSection({ previewUrl, onFileSelect }: Props) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (file && (file.type === "image/jpeg" || file.type === "image/png")) {
      onFileSelect(file);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0] || null;
    if (file && (file.type === "image/jpeg" || file.type === "image/png")) {
      onFileSelect(file);
    }
  };

  return (
    <div className="bg-card border border-border rounded-[2rem] p-8 shadow-soft">
      <h3 className="text-lg font-black uppercase tracking-tighter mb-4 text-foreground flex items-center gap-3">
        Upload Payment Proof <span className="text-red-500">*</span>
      </h3>
      <p className="text-muted-foreground text-[11px] font-bold uppercase tracking-widest mb-6">
        Required. Accepts JPG, PNG.
      </p>

      <div 
        className={`border-2 border-dashed ${previewUrl ? 'border-primary' : 'border-border'} rounded-2xl p-8 flex flex-col items-center justify-center text-center cursor-pointer hover:border-primary/50 hover:bg-muted/30 transition-all`}
        onClick={() => fileInputRef.current?.click()}
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
      >
        <input 
          type="file" 
          ref={fileInputRef}
          className="hidden" 
          accept="image/jpeg, image/png"
          onChange={handleFileChange}
        />
        
        {previewUrl ? (
          <div className="relative w-full aspect-video md:w-3/4 rounded-xl overflow-hidden border border-border shadow-sm">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={previewUrl} alt="Payment Proof" className="object-cover w-full h-full" />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
              <span className="text-white text-xs font-black uppercase tracking-widest">Click to change</span>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center py-6">
            <span className="text-4xl mb-4">📸</span>
            <span className="text-sm font-bold text-foreground">Click or drag image here</span>
            <span className="text-xs text-muted-foreground mt-2">JPG or PNG</span>
          </div>
        )}
      </div>
    </div>
  );
}
