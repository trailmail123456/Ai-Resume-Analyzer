import { useState,useEffect, use } from 'react'; 
import constants,{
   buildPresenceChecklist,METRIC_CONFIG,
} from '../constants.js';
import * as pdfjslib from "pdfjs-dist";
import pdfjsworker from "pdfjs-dist/build/pdf.worker.min?url";
pdfjslib.GlobalWorkerOptions.workerSrc = pdfjsworker;






function App() {

  const[aiready,setAiready]=useState(false);
  const
  return (
    <div className="min-h-screen bg-main-gradient p-4 sm:p-6 lg:p-8 flex items-center justify-center">
      <h1 className="text-7xl text-white">AI RESUME ANALYZER</h1>
    </div>
  );
}

export default App
