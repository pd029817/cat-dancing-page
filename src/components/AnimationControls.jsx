const DANCE_STYLES = [
  { id: 'bounce', label: '🎵 바운스' },
  { id: 'spin',   label: '🌀 스핀' },
  { id: 'wave',   label: '🌊 웨이브' },
  { id: 'disco',  label: '🕺 디스코' },
];

function AnimationControls({ isPlaying, onToggle, danceStyle, onChangeDance }) {
  return (
    <div className="controls">
      <button
        className={`toggle-btn ${isPlaying ? 'playing' : 'paused'}`}
        onClick={onToggle}
        aria-label={isPlaying ? '애니메이션 정지' : '애니메이션 시작'}
      >
        {isPlaying ? '⏸ 정지' : '▶ 시작'}
      </button>

      <div className="dance-styles" role="group" aria-label="댄스 스타일 선택">
        {DANCE_STYLES.map(({ id, label }) => (
          <button
            key={id}
            className={`style-btn ${danceStyle === id ? 'active' : ''}`}
            onClick={() => onChangeDance(id)}
            aria-pressed={danceStyle === id}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default AnimationControls;
