import Layout from './components/Layout';
import DancingCat from './components/DancingCat';
import AnimationControls from './components/AnimationControls';
import { useAnimation } from './hooks/useAnimation';

function App() {
  const { isPlaying, toggle, danceStyle, changeDance } = useAnimation(true);

  return (
    <Layout>
      <DancingCat isPlaying={isPlaying} danceStyle={danceStyle} />
      <AnimationControls
        isPlaying={isPlaying}
        onToggle={toggle}
        danceStyle={danceStyle}
        onChangeDance={changeDance}
      />
    </Layout>
  );
}

export default App;
