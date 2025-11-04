/**
 * Theme System for Content Creator Templates
 * Multiple color schemes for different creator personalities
 */

window.THEMES = {
  // ================================
  // MELI RICO PINK - Feminine Adventure ⭐ CUSTOM
  // Perfect for: Female motorcyclists, adventure riders, bold personalities
  // ================================
  "meli-rico-pink": {
    name: "Meli Rico Pink",
    description: "Custom theme for Melissa Rico - feminine meets adventure",
    personality: ["bold", "adventurous", "feminine", "energetic"],
    colors: {
      // Primary - Hot Pink/Magenta
      primary: "#FF1493",           // Deep pink (hot pink)
      primaryDark: "#C71585",       // Medium violet red
      primaryLight: "#FF69B4",      // Hot pink light

      // Secondary - Purple tones
      secondary: "#9333EA",         // Purple
      secondaryDark: "#7E22CE",     // Deep purple
      secondaryLight: "#A855F7",    // Light purple

      // Accent - Orange for adventure
      accent: "#FF6B35",            // Orange vibrant
      accentDark: "#E74C3C",        // Orange dark

      // Neutrals
      background: "#000000",        // Pure black
      backgroundSoft: "#0a0a0a",    // Soft black
      backgroundCard: "#1a1a1a",    // Card background
      backgroundElevated: "#262626", // Elevated surfaces

      // Text
      textPrimary: "#ffffff",       // White
      textSecondary: "#fafafa",     // Off-white
      textMuted: "#a3a3a3",         // Gray
      textDisabled: "#666666",      // Disabled gray

      // States
      success: "#10B981",           // Green
      warning: "#F59E0B",           // Amber
      error: "#EF4444",             // Red
      info: "#3B82F6"               // Blue
    },
    gradients: {
      primary: "linear-gradient(135deg, #FF1493, #C71585)",
      secondary: "linear-gradient(135deg, #9333EA, #7E22CE)",
      hero: "linear-gradient(90deg, #FF1493, #9333EA, #FF6B35)",
      card: "linear-gradient(135deg, rgba(255, 20, 147, 0.1), rgba(147, 51, 234, 0.1))",
      overlay: "linear-gradient(180deg, rgba(255, 20, 147, 0.7), rgba(0, 0, 0, 0.9))"
    },
    shadows: {
      small: "0 2px 8px rgba(255, 20, 147, 0.15)",
      medium: "0 10px 30px rgba(255, 20, 147, 0.25)",
      large: "0 20px 60px rgba(255, 20, 147, 0.35)",
      glow: "0 0 20px rgba(255, 20, 147, 0.5)"
    },
    psychology: "Bold femininity meets adventure. Pink represents strength and confidence in a male-dominated field, while maintaining authenticity. Perfect for female riders breaking stereotypes.",
    bestFor: ["Female motorcyclists", "Adventure riders", "Enduro women", "Bold personalities", "Multi-platform creators"],
    inspiration: "Designed for @melirico_ - breaking stereotypes in the motorcycle world"
  },

  // ================================
  // PURPLE POWER - Creative & Unique
  // Perfect for: Gaming, Entertainment, Multi-talented creators
  // ================================
  "purple-power": {
    name: "Purple Power",
    description: "For unique personalities, gamers, creative entertainers",
    personality: ["creative", "playful", "bold", "entertaining"],
    colors: {
      // Primary - Purple tones
      primary: "#9333EA",           // Vivid purple
      primaryDark: "#7E22CE",       // Deep purple
      primaryLight: "#A855F7",      // Light purple

      // Secondary - Pink tones
      secondary: "#EC4899",         // Hot pink
      secondaryDark: "#DB2777",     // Deep pink
      secondaryLight: "#F472B6",    // Light pink

      // Accent - Cyan for contrast
      accent: "#06B6D4",            // Cyan
      accentDark: "#0891B2",        // Dark cyan

      // Neutrals
      background: "#000000",        // Pure black
      backgroundSoft: "#0a0a0a",    // Soft black
      backgroundCard: "#1a1a1a",    // Card background
      backgroundElevated: "#262626", // Elevated surfaces

      // Text
      textPrimary: "#ffffff",       // White
      textSecondary: "#fafafa",     // Off-white
      textMuted: "#a3a3a3",         // Gray
      textDisabled: "#666666",      // Disabled gray

      // States
      success: "#10B981",           // Green
      warning: "#F59E0B",           // Amber
      error: "#EF4444",             // Red
      info: "#3B82F6"               // Blue
    },
    gradients: {
      primary: "linear-gradient(135deg, #9333EA, #7E22CE)",
      secondary: "linear-gradient(135deg, #EC4899, #DB2777)",
      hero: "linear-gradient(90deg, #9333EA, #EC4899)",
      card: "linear-gradient(135deg, rgba(147, 51, 234, 0.1), rgba(236, 72, 153, 0.1))",
      overlay: "linear-gradient(180deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9))"
    },
    shadows: {
      small: "0 2px 8px rgba(147, 51, 234, 0.15)",
      medium: "0 10px 30px rgba(147, 51, 234, 0.25)",
      large: "0 20px 60px rgba(147, 51, 234, 0.35)",
      glow: "0 0 20px rgba(147, 51, 234, 0.5)"
    },
    psychology: "Conveys creativity, uniqueness, luxury, entertainment, and boldness. Perfect for multi-talented creators.",
    bestFor: ["Gaming", "Entertainment", "Multi-platform creators", "Comedy", "Lifestyle"]
  },

  // ================================
  // ADVENTURE ORANGE - Energy & Excitement
  // Perfect for: Motorcyclists, adventurers, extreme sports
  // ================================
  "adventure-orange": {
    name: "Adventure Orange",
    description: "For motorcyclists, adventurers, extreme sports",
    personality: ["adventurous", "energetic", "bold", "passionate"],
    colors: {
      primary: "#FF6B35",
      primaryDark: "#E74C3C",
      secondary: "#00D9FF",
      secondaryDark: "#4A90E2",
      background: "#000000",
      backgroundSoft: "#0a0a0a",
      backgroundCard: "#1a1a1a",
      textPrimary: "#ffffff",
      textSecondary: "#fafafa",
      textMuted: "#666666"
    },
    gradients: {
      primary: "linear-gradient(135deg, #FF6B35, #E74C3C)",
      secondary: "linear-gradient(135deg, #00D9FF, #4A90E2)",
      hero: "linear-gradient(90deg, #FF6B35, #00D9FF)",
      card: "linear-gradient(135deg, rgba(255, 107, 53, 0.1), rgba(0, 217, 255, 0.1))"
    },
    psychology: "Conveys excitement, adventure, energy, and trust",
    bestFor: ["Motorcycles", "Adventure sports", "Outdoor activities"]
  },

  // ================================
  // MOUNTAIN BLUE - Trust & Nature
  // Perfect for: Cyclists, hikers, outdoor enthusiasts
  // ================================
  "mountain-blue": {
    name: "Mountain Blue",
    description: "For cyclists, hikers, outdoor enthusiasts",
    personality: ["trustworthy", "calm", "natural", "reliable"],
    colors: {
      primary: "#2563EB",
      primaryDark: "#1E40AF",
      secondary: "#10B981",
      secondaryDark: "#059669",
      background: "#000000",
      backgroundSoft: "#0a0a0a",
      backgroundCard: "#1a1a1a",
      textPrimary: "#ffffff",
      textSecondary: "#fafafa",
      textMuted: "#666666"
    },
    gradients: {
      primary: "linear-gradient(135deg, #2563EB, #1E40AF)",
      secondary: "linear-gradient(135deg, #10B981, #059669)",
      hero: "linear-gradient(90deg, #2563EB, #10B981)",
      card: "linear-gradient(135deg, rgba(37, 99, 235, 0.1), rgba(16, 185, 129, 0.1))"
    },
    psychology: "Conveys trust, stability, growth, and nature",
    bestFor: ["Cycling", "Hiking", "Mountain sports", "Eco-tourism"]
  },

  // ================================
  // SUNSET RED - Passion & Competition
  // Perfect for: Racers, competitive athletes, high intensity
  // ================================
  "sunset-red": {
    name: "Sunset Red",
    description: "For racers, competitive athletes, high intensity",
    personality: ["passionate", "competitive", "intense", "powerful"],
    colors: {
      primary: "#DC2626",
      primaryDark: "#991B1B",
      secondary: "#F59E0B",
      secondaryDark: "#D97706",
      background: "#000000",
      backgroundSoft: "#0a0a0a",
      backgroundCard: "#1a1a1a",
      textPrimary: "#ffffff",
      textSecondary: "#fafafa",
      textMuted: "#666666"
    },
    gradients: {
      primary: "linear-gradient(135deg, #DC2626, #991B1B)",
      secondary: "linear-gradient(135deg, #F59E0B, #D97706)",
      hero: "linear-gradient(90deg, #DC2626, #F59E0B)",
      card: "linear-gradient(135deg, rgba(220, 38, 38, 0.1), rgba(245, 158, 11, 0.1))"
    },
    psychology: "Conveys passion, energy, urgency, and competition",
    bestFor: ["Racing", "Competitive sports", "High-energy content"]
  },

  // ================================
  // OCEAN TEAL - Flow & Freedom
  // Perfect for: Surfers, water sports, coastal adventurers
  // ================================
  "ocean-teal": {
    name: "Ocean Teal",
    description: "For surfers, water sports, coastal adventurers",
    personality: ["flowing", "free", "calm", "refreshing"],
    colors: {
      primary: "#14B8A6",
      primaryDark: "#0D9488",
      secondary: "#06B6D4",
      secondaryDark: "#0891B2",
      background: "#000000",
      backgroundSoft: "#0a0a0a",
      backgroundCard: "#1a1a1a",
      textPrimary: "#ffffff",
      textSecondary: "#fafafa",
      textMuted: "#666666"
    },
    gradients: {
      primary: "linear-gradient(135deg, #14B8A6, #0D9488)",
      secondary: "linear-gradient(135deg, #06B6D4, #0891B2)",
      hero: "linear-gradient(90deg, #14B8A6, #06B6D4)",
      card: "linear-gradient(135deg, rgba(20, 184, 166, 0.1), rgba(6, 182, 212, 0.1))"
    },
    psychology: "Conveys calmness, flow, freedom, and water",
    bestFor: ["Surfing", "Water sports", "Beach lifestyle", "Sailing"]
  },

  // ================================
  // FOREST GREEN - Growth & Harmony
  // Perfect for: Trail runners, hikers, nature explorers
  // ================================
  "forest-green": {
    name: "Forest Green",
    description: "For trail runners, hikers, nature explorers",
    personality: ["natural", "sustainable", "grounded", "peaceful"],
    colors: {
      primary: "#16A34A",
      primaryDark: "#15803D",
      secondary: "#84CC16",
      secondaryDark: "#65A30D",
      background: "#000000",
      backgroundSoft: "#0a0a0a",
      backgroundCard: "#1a1a1a",
      textPrimary: "#ffffff",
      textSecondary: "#fafafa",
      textMuted: "#666666"
    },
    gradients: {
      primary: "linear-gradient(135deg, #16A34A, #15803D)",
      secondary: "linear-gradient(135deg, #84CC16, #65A30D)",
      hero: "linear-gradient(90deg, #16A34A, #84CC16)",
      card: "linear-gradient(135deg, rgba(22, 163, 74, 0.1), rgba(132, 204, 22, 0.1))"
    },
    psychology: "Conveys growth, harmony, nature, and sustainability",
    bestFor: ["Trail running", "Hiking", "Eco-tourism", "Nature photography"]
  }
};

// ================================
// THEME MANAGER
// ================================
window.ThemeManager = {
  currentTheme: null,

  /**
   * Apply theme to document
   * @param {string} themeName - Name of the theme to apply
   */
  applyTheme: function(themeName) {
    const theme = THEMES[themeName];
    if (!theme) {
      console.error(`❌ Theme "${themeName}" not found. Available themes:`, Object.keys(THEMES));
      return false;
    }

    const root = document.documentElement;
    this.currentTheme = themeName;

    // Apply color variables
    Object.entries(theme.colors).forEach(([key, value]) => {
      const cssVarName = key
        .replace(/([A-Z])/g, '-$1')
        .toLowerCase()
        .replace(/^-/, '');
      root.style.setProperty(`--color-${cssVarName}`, value);

      // Also set legacy variable names for backward compatibility
      if (key === 'primary') root.style.setProperty('--orange-vibrant', value);
      if (key === 'primaryDark') root.style.setProperty('--orange-dark', value);
      if (key === 'secondary') root.style.setProperty('--cyan-electric', value);
      if (key === 'secondaryDark') root.style.setProperty('--blue-sky', value);
      if (key === 'background') root.style.setProperty('--black-pure', value);
      if (key === 'backgroundSoft') root.style.setProperty('--black-soft', value);
      if (key === 'backgroundCard') root.style.setProperty('--gray-dark', value);
      if (key === 'textMuted') root.style.setProperty('--gray-medium', value);
      if (key === 'textPrimary') root.style.setProperty('--white-pure', value);
      if (key === 'textSecondary') root.style.setProperty('--white-off', value);
    });

    // Apply gradient variables
    Object.entries(theme.gradients).forEach(([key, value]) => {
      root.style.setProperty(`--gradient-${key}`, value);
    });

    // Apply shadow variables
    if (theme.shadows) {
      Object.entries(theme.shadows).forEach(([key, value]) => {
        root.style.setProperty(`--shadow-${key}`, value);
      });
    }

    // Store theme preference
    try {
      localStorage.setItem('preferred-theme', themeName);
    } catch (e) {
      console.warn('Could not save theme preference:', e);
    }

    console.log(`✨ Theme "${theme.name}" applied successfully`);
    console.log(`🎨 Psychology: ${theme.psychology}`);
    console.log(`🎯 Best for: ${theme.bestFor.join(', ')}`);

    return true;
  },

  /**
   * Get current theme name
   * @returns {string} Current theme name
   */
  getCurrentTheme: function() {
    return this.currentTheme || this.getDefaultTheme();
  },

  /**
   * Get default theme from config or fallback
   * @returns {string} Default theme name
   */
  getDefaultTheme: function() {
    if (typeof CREATOR_CONFIG !== 'undefined' && CREATOR_CONFIG.branding?.colorScheme) {
      return CREATOR_CONFIG.branding.colorScheme;
    }
    return 'adventure-orange'; // Fallback
  },

  /**
   * Get theme data
   * @param {string} themeName - Name of the theme
   * @returns {object} Theme data object
   */
  getTheme: function(themeName) {
    return THEMES[themeName] || null;
  },

  /**
   * Get all available themes
   * @returns {array} Array of theme names
   */
  getAllThemes: function() {
    return Object.keys(THEMES);
  },

  /**
   * Get themes by personality trait
   * @param {string} trait - Personality trait to search for
   * @returns {array} Array of matching theme names
   */
  getThemesByPersonality: function(trait) {
    return Object.keys(THEMES).filter(themeName => {
      const theme = THEMES[themeName];
      return theme.personality.includes(trait.toLowerCase());
    });
  },

  /**
   * Get themes by use case
   * @param {string} useCase - Use case to search for
   * @returns {array} Array of matching theme names
   */
  getThemesByUseCase: function(useCase) {
    return Object.keys(THEMES).filter(themeName => {
      const theme = THEMES[themeName];
      return theme.bestFor.some(item =>
        item.toLowerCase().includes(useCase.toLowerCase())
      );
    });
  },

  /**
   * Initialize theme system
   */
  init: function() {
    // Try to get saved preference
    let themeName = null;
    try {
      themeName = localStorage.getItem('preferred-theme');
    } catch (e) {
      console.warn('Could not load theme preference:', e);
    }

    // Fallback to config or default
    if (!themeName || !THEMES[themeName]) {
      themeName = this.getDefaultTheme();
    }

    // Apply theme
    this.applyTheme(themeName);
  }
};

// Export for use in modules (if needed)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { THEMES, ThemeManager };
}
