import { useState } from 'react';
import { Input } from './components/ui/input';
import { Button } from './components/ui/button';
import { Ghost, Skull, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [name, setName] = useState('');
  const [showSurprise, setShowSurprise] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      setShowSurprise(true);
    }
  };

  const handleReset = () => {
    setName('');
    setShowSurprise(false);
  };

  return (
    <div className="size-full min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-black relative overflow-hidden flex items-center justify-center">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-10 left-10 text-orange-500 opacity-20"
        animate={{ y: [0, 20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <Ghost size={80} />
      </motion.div>
      
      <motion.div
        className="absolute top-20 right-20 text-purple-400 opacity-20"
        animate={{ y: [0, -20, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <Skull size={70} />
      </motion.div>

      <motion.div
        className="absolute bottom-20 left-20 text-orange-400 opacity-20"
        animate={{ x: [0, 15, 0], rotate: [0, 15, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      >
        <Moon size={60} />
      </motion.div>

      <motion.div
        className="absolute top-1/2 right-10 text-gray-600 opacity-20"
        animate={{ x: [-20, 20, -20], y: [0, -10, 0] }}
        transition={{ duration: 3.5, repeat: Infinity }}
      >
        <Ghost size={50} />
      </motion.div>

      <motion.div
        className="absolute bottom-10 right-1/4 text-purple-500 opacity-20"
        animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        <Skull size={65} />
      </motion.div>

      <AnimatePresence mode="wait">
        {!showSurprise ? (
          <motion.div
            key="form"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8, rotate: -5 }}
            transition={{ duration: 0.5 }}
            className="relative z-10 max-w-md w-full mx-4"
          >
            <div className="bg-black/60 backdrop-blur-lg border-2 border-orange-500 rounded-lg p-8 shadow-2xl shadow-orange-500/20">
              <motion.div
                className="flex justify-center mb-6"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Ghost className="text-orange-500" size={80} />
              </motion.div>

              <h1 className="text-center text-orange-500 mb-2">🎃 Halloween Especial 🎃</h1>
              <p className="text-center text-purple-300 mb-6">
                Ingresa tu nombre para recibir una invitación especial...
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    type="text"
                    placeholder="Tu nombre aquí..."
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="bg-gray-800/50 border-purple-500 text-white placeholder:text-gray-400 focus:border-orange-500"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white border border-orange-400"
                  disabled={!name.trim()}
                >
                  Descubrir mi invitación 👻
                </Button>
              </form>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="surprise"
            initial={{ opacity: 0, scale: 0.5, rotateY: 90 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="relative z-10 max-w-2xl w-full mx-4"
          >
            <motion.div
              className="bg-black/70 backdrop-blur-lg border-2 border-orange-500 rounded-lg p-8 shadow-2xl shadow-orange-500/30"
              animate={{ 
                boxShadow: [
                  "0 0 20px rgba(249, 115, 22, 0.3)",
                  "0 0 40px rgba(249, 115, 22, 0.5)",
                  "0 0 20px rgba(249, 115, 22, 0.3)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <motion.div
                className="flex justify-center mb-6"
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{ duration: 0.5 }}
              >
                <Skull className="text-red-500" size={100} />
              </motion.div>

              <motion.h1
                className="text-center text-orange-500 mb-4"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                ¡FELICIDADES {name.toUpperCase()}! 🎃
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="space-y-4"
              >
                <p className="text-center text-purple-300">
                  Tenemos una excelente noticia para ti...
                </p>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 }}
                  className="bg-gradient-to-r from-orange-900/50 to-red-900/50 border border-orange-600 rounded-lg p-6 mt-4"
                >
                  <p className="text-center text-white">
                    🎭 <strong>¡Ya no necesitas máscara para Halloween!</strong> 🎭
                  </p>
                  <p className="text-center text-orange-300 mt-3">
                    Con ese rostro horrible que tienes, ya das miedo sin disfraz 😈💀
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="flex justify-center gap-2 pt-4"
                >
                  <Ghost className="text-purple-400 animate-bounce" />
                  <Moon className="text-orange-400 animate-bounce" style={{ animationDelay: '0.2s' }} />
                  <Skull className="text-red-400 animate-bounce" style={{ animationDelay: '0.4s' }} />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                >
                  <Button
                    onClick={handleReset}
                    className="w-full mt-6 bg-purple-700 hover:bg-purple-800 text-white border border-purple-500"
                  >
                    Enviar a otro amigo 👻
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating ghosts */}
      <motion.div
        className="absolute top-1/4 left-1/4 text-gray-700 opacity-30"
        animate={{ 
          x: [0, 100, 0],
          y: [0, -50, 0]
        }}
        transition={{ duration: 8, repeat: Infinity }}
      >
        <Ghost size={30} />
      </motion.div>

      <motion.div
        className="absolute bottom-1/3 right-1/3 text-gray-700 opacity-30"
        animate={{ 
          x: [0, -80, 0],
          y: [0, 60, 0]
        }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        <Skull size={25} />
      </motion.div>
    </div>
  );
}
