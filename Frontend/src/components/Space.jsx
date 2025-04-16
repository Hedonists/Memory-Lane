import React, { useState, useRef } from 'react'
import { X, Trash2 } from 'lucide-react'
import TiltedCard from './TiltedCard'
import AudioPlayer from './AudioPlayer'
import { assets } from '../assets/assets'

const Space = ({ onClose }) => {
  const [selectedAudios, setSelectedAudios] = useState([])
  const [uploadedAudios, setUploadedAudios] = useState([])
  const fileInputRef = useRef(null)

  const handleUpload = (e) => {
    const files = Array.from(e.target.files)
    const audioFiles = files.filter(file => file.type.startsWith('audio/'))
    const newAudios = audioFiles.map(file => ({
      file,
      name: file.name,
      url: URL.createObjectURL(file),
      id: Date.now() + Math.random(),
    }))
    setSelectedAudios(prev => [...prev, ...newAudios])
    if (fileInputRef.current) fileInputRef.current.value = ''
  }

  const handleDeleteSelected = (id) => {
    setSelectedAudios(prev => prev.filter(audio => audio.id !== id))
  }
  const handleDeleteUploaded = (id) => {
    setUploadedAudios(prev => prev.filter(audio => audio.id !== id));
  };
  

  const handleSubmit = () => {
    setUploadedAudios(prev => [...prev, ...selectedAudios])
    setSelectedAudios([])
  }

  const renderAudioCard = (audio, isDeletable = true, onDelete = null) => (
    <TiltedCard
      key={audio.id}
      imageSrc={assets.audio_bg}
      altText={audio.name}
      captionText={audio.name}
      containerHeight="140px"
      containerWidth="140px"
      imageHeight="140px"
      imageWidth="140px"
      rotateAmplitude={5}
      scaleOnHover={1}
      showMobileWarning={false}
      showTooltip={false}
      displayOverlayContent={true}
      overlayContent={
        <div className="text-white max-w-[140px] text-center p-3 flex flex-col items-center space-y-10">
          <div className="flex items-center justify-between w-full px-1">
            <p className="text-[9px] text-black font-semibold truncate">{audio.name}</p>
            {isDeletable && onDelete && (
              <button
                onClick={() => onDelete(audio.id)}
                className="bg-black/50 ml-1 rounded-full p-1 text-white hover:text-red-400"
              >
                <Trash2 className="w-3 h-3" />
              </button>
            )}
          </div>
          <AudioPlayer src={audio.url} />
        </div>
      }
    />
  )
  

  return (
    <div className="fixed inset-0 bg-black/10 backdrop-blur-sm z-50 flex items-center justify-center px-2 sm:px-4">
      <div className="w-full max-w-6xl bg-black/80 border border-white/20 backdrop-blur-xl px-2 p-6 sm:p-8 rounded-3xl text-white shadow-2xl relative overflow-y-auto max-h-[90vh]">
        <button onClick={onClose} className="absolute top-4 right-4 text-white hover:text-neutral-300">
          <X className="w-6 h-6" />
        </button>

        <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-center">Upload Your Audio</h2>
        {/* Input & selected audios */}
        <div className="flex flex-col items-center justify-center w-full">
          {selectedAudios.length === 0 ? (
            <label className="cursor-pointer border border-white/20 bg-white/5 text-white text-sm px-4 py-2 rounded-lg hover:bg-white/10 transition shadow-md">
              <input
                ref={fileInputRef}
                type="file"
                accept="audio/*"
                onChange={handleUpload}
                className="hidden"
              />
              Upload Audio
            </label>
          ) : (
            <div className="relative mt-4">
              {renderAudioCard(selectedAudios[0], true, handleDeleteSelected)}


              {/* Submit Button */}
      <button
        onClick={handleSubmit}
        className="absolute -top-4 -right-3 text-xs bg-white/10 hover:bg-white/20 px-2 py-1 rounded-md text-white font-medium shadow-sm transition"
      >
        Submit
      </button>
    </div>
  )}
</div>
        {/* Uploaded audios */}
        {uploadedAudios.length > 0 && (
  <>
    <h3 className="mt-10 text-lg font-semibold text-center">Uploaded Audios</h3>
    
    <div className="mt-4 max-h-[300px] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 sm:gap-y-10 w-fit sm:w-full mx-auto">
      {uploadedAudios.map(audio => renderAudioCard(audio, true, handleDeleteUploaded))}
      </div>
    </div>
  </>
)}

      </div>
    </div>
  )
}

export default Space