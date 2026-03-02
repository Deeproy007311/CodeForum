export const ProfileHeader = () => {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-line bg-panel/70 backdrop-blur p-8 mb-12">

      {/* 🔥 Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/20 blur-[120px] rounded-full"></div>
      </div>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">

        {/* Avatar */}
        <div className="relative">
          <div className="w-28 h-28 rounded-full bg-gradient-to-br from-accent to-accent/40 flex items-center justify-center text-4xl font-bold text-white shadow-lg">
            D
          </div>

          {/* online dot */}
          <span className="absolute bottom-2 right-2 w-4 h-4 bg-green-400 border-2 border-panel rounded-full"></span>
        </div>

        {/* Info */}
        <div className="flex-1 text-center md:text-left">

          <h1 className="text-3xl font-semibold tracking-tight">
            Deep Roy
          </h1>

          <p className="text-subtext mt-3 max-w-xl">
            Full-stack developer focused on MERN stack. Building scalable and modern web applications 🚀
          </p>

          {/* Tags / Skills */}
          <div className="flex flex-wrap gap-2 mt-4 justify-center md:justify-start">
            <span className="bg-soft px-3 py-1 rounded-md text-xs">React</span>
            <span className="bg-soft px-3 py-1 rounded-md text-xs">Node.js</span>
            <span className="bg-soft px-3 py-1 rounded-md text-xs">MongoDB</span>
            <span className="bg-soft px-3 py-1 rounded-md text-xs">Tailwind</span>
          </div>

        </div>

      </div>

      {/* 🔥 Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">

        <div className="bg-soft rounded-xl p-4 text-center">
          <p className="text-lg font-semibold">12</p>
          <p className="text-xs text-subtext">Questions</p>
        </div>

        <div className="bg-soft rounded-xl p-4 text-center">
          <p className="text-lg font-semibold">34</p>
          <p className="text-xs text-subtext">Answers</p>
        </div>

        <div className="bg-soft rounded-xl p-4 text-center">
          <p className="text-lg font-semibold text-accent">120</p>
          <p className="text-xs text-subtext">Votes</p>
        </div>

        <div className="bg-soft rounded-xl p-4 text-center">
          <p className="text-lg font-semibold">5</p>
          <p className="text-xs text-subtext">Badges</p>
        </div>

      </div>

    </div>
  );
};