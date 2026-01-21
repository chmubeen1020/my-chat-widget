import React, { useState, useRef } from 'react';
import { FileText, ArrowUpToLine, Link as LinkIcon, Upload, X, AlertCircle } from 'lucide-react';

export default function UploadDataPanel() {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [urls, setUrls] = useState("");
  const fileInputRef = useRef(null);

  const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

  const handleFileChange = (selectedFile) => {
    setError(null);
    if (!selectedFile) return;

    if (selectedFile.size > MAX_FILE_SIZE) {
      setError(`File '${selectedFile.name}' exceeds the 10MB limit.`);
      setFile(null);
      return;
    }

    setFile(selectedFile);
    simulateUpload();
  };

  const simulateUpload = () => {
    setUploading(true);
    setUploadProgress(0);
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setUploading(false);
          return 100;
        }
        return prev + 5;
      });
    }, 200);
  };

  // Drag and Drop Handlers
  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const droppedFile = e.dataTransfer.files[0];
    handleFileChange(droppedFile);
  };

  return (
    <div className="w-full space-y-6">
      {/* Training Progress Section */}
      <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
        <h2 className="text-sm font-semibold text-gray-900">Training Progress</h2>
        <p className="text-xs text-gray-500 mt-1">AI is currently processing 1 data source(s).</p>
        <div className="mt-4">
          <div className="h-2 rounded-full bg-gray-100 overflow-hidden">
            <div 
              className="h-full bg-primary rounded-full transition-all duration-300" 
              style={{ width: `${uploadProgress}%` }} 
            />
          </div>
          <p className="text-xs text-gray-500 mt-2">Processing... This may take a few minutes.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Column: Upload Documents */}
        <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
          <div className="flex items-start gap-2 mb-4">
            <FileText size={16} className="text-gray-700 mt-0.5" />
            <div>
              <h3 className="text-sm font-semibold text-gray-900">Upload Documents</h3>
              <p className="text-xs text-gray-500">Upload PDF, Word, or text files (max 10MB).</p>
            </div>
          </div>

          {/* Hidden Input */}
          <input 
            type="file" 
            ref={fileInputRef} 
            className="hidden" 
            accept=".pdf,.doc,.docx,.txt"
            onChange={(e) => handleFileChange(e.target.files[0])}
          />

          {/* Dropzone */}
          <div 
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current.click()}
            className="cursor-pointer rounded-xl border-2 border-dashed border-gray-200 bg-gray-50/40 p-6 text-center hover:border-primary transition-colors"
          >
            <div className="mx-auto w-10 h-10 rounded-xl bg-white flex items-center justify-center border border-gray-200 ">
              <ArrowUpToLine size={18} className="text-gray-600" />
            </div>
            <p className="text-sm text-gray-700 mt-3 font-medium">Drag and drop files here, or click to browse</p>
            <p className="text-xs text-gray-500 mt-1">Supports PDF, DOC, DOCX, TXT</p>
          </div>

          {/* Error Message (Image 2 logic) */}
          {error && (
            <div className="mt-4 p-3 rounded-lg bg-red-50 border border-red-100 flex items-center gap-2 text-red-600">
              <AlertCircle size={16} />
              <p className="text-xs font-medium">{error}</p>
            </div>
          )}

          {/* Uploading File Row (Image 1 logic) */}
          {file && !error && (
            <div className="mt-4 rounded-xl border border-gray-200  p-3 bg-white">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2 min-w-0">
                  <FileText size={16} className="text-primary shrink-0" />
                  <div className="min-w-0">
                    <div className="text-sm text-gray-900 truncate font-medium">{file.name}</div>
                    <div className="text-xs text-gray-500">
                      {uploading ? "Uploading..." : "Uploaded"}
                    </div>
                  </div>
                </div>
                <button onClick={() => setFile(null)} className="text-gray-400 hover:text-gray-600">
                  <X size={14} />
                </button>
              </div>
              <div className="mt-2 h-1.5 rounded-full bg-gray-100 overflow-hidden">
                <div 
                  className="h-full bg-primary transition-all duration-300" 
                  style={{ width: `${uploadProgress}%` }} 
                />
              </div>
            </div>
          )}

          <button className="mt-4 w-full inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/90 transition-colors">
            <Upload size={16} />
            Upload Documents
          </button>
        </div>

        {/* Right Column: Website URLs */}
        <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
          <div className="flex items-start gap-2 mb-4">
            <LinkIcon size={16} className="text-gray-700 mt-0.5" />
            <div>
              <h3 className="text-sm font-semibold text-gray-900">Website URLs</h3>
              <p className="text-xs text-gray-500">Add website URLs to crawl.</p>
            </div>
          </div>
          <textarea
            value={urls}
            onChange={(e) => setUrls(e.target.value)}
            rows={6}
            className="w-full rounded-xl border border-gray-200 p-3 text-sm outline-none transition-all"
            placeholder={"https://yourwebsite.com/help\nhttps://yourwebsite.com/faq"}
          />
          <button className="mt-4 w-full inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/90 transition-colors">
            <ArrowUpToLine size={16} />
            Add URLs
          </button>
        </div>
      </div>
    </div>
  );
}