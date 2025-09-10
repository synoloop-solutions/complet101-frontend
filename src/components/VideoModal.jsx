import React, { useEffect, useRef } from "react";
import styles from "./VideoModal.module.css";
import { X } from "lucide-react";

/**
 * VideoModal component to display a video in a modal dialog
 * @param {boolean} isOpen - Whether the modal is open
 * @param {Function} onClose - Callback to close the modal
 * @param {string} videoUrl - URL of the video to display
 * @param {string} title - Title for accessibility
 * @param {string} autoPlay - whether video should autoplay when opened
 */

const VideoModal = ({
  isOpen,
  onClose,
  videoUrl,
  title = "Video Player",
  autoPlay = true,
}) => {
  const modalRef = useRef(null);
  const iframeRef = useRef(null);

  //   Handle escape key to close modal
  useEffect(() => {
    if (!isOpen) return;

    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscapeKey);
    document.addEventListener("mousedown", handleClickOutside);

    // Prevent body scroll when modal is open
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  // Reset video when modal closes
  useEffect(() => {
    if (isOpen && modalRef.current) {
      modalRef.current.focus();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className={styles.overlay}
      role="dialog"
      aria-modal="true"
      aria-labelledby="video-modal-title"
    >
      <div ref={modalRef} className={styles.modal} tabIndex="-1">
        {/* Modal Header */}
        <div className={styles.header}>
          <h2 id="video-modal-title" className={styles.title}>
            {title}
          </h2>
          <button
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Close video"
            type="button"
          >
            <X size={24} />
          </button>
        </div>

        {/* Video Container */}
        <div className={styles.videoContainer}>
          {videoUrl.includes("youtube.com") || videoUrl.includes("youtu.be") ? (
            // YouTube embed
            <iframe
              src={`${videoUrl}${autoPlay ? "?autoplay=1" : ""}`}
              title={title}
              className={styles.video}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : videoUrl.includes("vimeo.com") ? (
            // Vimeo embed
            <iframe
              src={`${videoUrl}${autoPlay ? "?autoplay=1" : ""}`}
              title={title}
              className={styles.video}
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
          ) : (
            // HTML5 video for direct video files
            <video
              ref={videoRef}
              className={styles.video}
              controls
              autoPlay={autoPlay}
              preload="metadata"
            >
              <source src={videoUrl} type="video/mp4" />
              <source src={videoUrl} type="video/webm" />
              <source src={videoUrl} type="video/ogg" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
