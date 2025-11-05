// ===================================
// MULTILINGUAL TRANSLATIONS
// All text in the app translated to 4 languages
// ===================================

const translations = {
    en: {
        appTitle: "Fitness Tracker",
        appSubtitle: "Track Your Journey to Health",
        recordExercise: "Record Exercise",
        recordExerciseDesc: "Log your workout",
        viewRecords: "View Records",
        viewRecordsDesc: "Check your progress",
        exportData: "Export Data",
        exportDataDesc: "Download your data",
        settings: "Settings",
        settingsDesc: "Customize your app",
        back: "Back",
        selectCategory: "Select Category",
        selectExercise: "Select Exercise",
        notes: "Notes (Optional)",
        saveWorkout: "Save Workout",
        reset: "Reset",
        totalWorkouts: "Total Workouts",
        thisMonth: "This Month",
        mostFrequent: "Most Frequent",
        categoryDistribution: "Category Distribution",
        weeklyActivity: "Weekly Activity",
        workoutHistory: "Workout History",
        exportInfo: "Download your workout data as a CSV file that can be opened in Excel or Google Sheets.",
        dataPreview: "Data Preview",
        downloadCSV: "Download CSV File",
        language: "Language",
        theme: "Theme",
        themeSystem: "System Default",
        themeLight: "Light Mode",
        themeDark: "Dark Mode",
        backgroundImage: "Background Image",
        removeBackground: "Remove Background",
        dataManagement: "Data Management",
        clearAllData: "Clear All Data",
        clearDataWarning: "⚠️ This will delete all your workout records permanently!",
        
        // Exercise categories
        categoryStrength: "Strength Training",
        categoryStrengthDesc: "Builds muscle using weights or body-weight; improves power and tone.",
        categoryCardio: "Cardio/Aerobic",
        categoryCardioDesc: "Activities that raise your heart-rate; great for endurance and fat-burning.",
        categoryFlexibility: "Flexibility/Yoga",
        categoryFlexibilityDesc: "Stretching and poses; enhance mobility and reduce injury risk.",
        categoryHIIT: "HIIT",
        categoryHIITDesc: "High-Intensity Interval Training; short bursts of intense effort; boosts metabolism.",
        categoryCore: "Core/Ab Workouts",
        categoryCoreDesc: "Targets the mid-section; improves stability and posture.",
        categoryBalance: "Balance/Stability",
        categoryBalanceDesc: "Exercises like planks or single-leg stands; help coordination and prevent injury.",
        
        // Form fields
        sets: "Sets",
        reps: "Reps",
        weight: "Weight (kg)",
        duration: "Duration (minutes)",
        durationSeconds: "Duration (seconds)",
        distance: "Distance (km)",
        distanceMiles: "Distance (miles)",
        pace: "Pace (min/km)",
        speed: "Speed (km/h)",
        skips: "Number of Skips",
        
        // Messages
        workoutSaved: "Workout saved successfully!",
        noData: "No workout data yet. Start tracking your exercises!",
        confirmClear: "Are you sure you want to delete all your workout data? This cannot be undone!",
        dataCleared: "All data has been cleared.",
        bgUploaded: "Background image uploaded!",
        bgRemoved: "Background image removed.",
        edit: "Edit",
        delete: "Delete",
        confirmDelete: "Delete this workout?",
        
        // Empty states
        noWorkouts: "No workouts recorded yet",
        startTracking: "Start tracking your fitness journey!",
        
        // Exercise names - Strength
        "Push-ups": "Push-ups",
        "Pull-ups": "Pull-ups",
        "Squats": "Squats",
        "Deadlifts": "Deadlifts",
        "Dumbbell Shoulder Press": "Dumbbell Shoulder Press",
        "Bicep Curls": "Bicep Curls",
        "Tricep Dips": "Tricep Dips",
        "Lunges": "Lunges",
        "Bench Press": "Bench Press",
        "Leg Press": "Leg Press",
        
        // Exercise names - Cardio
        "Running": "Running",
        "Cycling": "Cycling",
        "Swimming": "Swimming",
        "Jumping Jacks": "Jumping Jacks",
        "Burpees": "Burpees",
        "Stair Climbing": "Stair Climbing",
        "Rowing": "Rowing",
        "Brisk Walking": "Brisk Walking",
        "Jump Rope": "Jump Rope",
        "Elliptical": "Elliptical",
        
        // Exercise names - Flexibility
        "Downward Dog": "Downward Dog",
        "Child's Pose": "Child's Pose",
        "Warrior Pose": "Warrior Pose",
        "Cat-Cow Stretch": "Cat-Cow Stretch",
        "Hamstring Stretch": "Hamstring Stretch",
        "Shoulder Stretch": "Shoulder Stretch",
        "Cobra Pose": "Cobra Pose",
        "Seated Forward Bend": "Seated Forward Bend",
        
        // Exercise names - HIIT
        "Mountain Climbers": "Mountain Climbers",
        "High Knees": "High Knees",
        "Squat Jumps": "Squat Jumps",
        "Tabata Intervals": "Tabata Intervals",
        "Kettlebell Swings": "Kettlebell Swings",
        
        // Exercise names - Core
        "Planks": "Planks",
        "Russian Twists": "Russian Twists",
        "Crunches": "Crunches",
        "Leg Raises": "Leg Raises",
        "Bicycle Crunches": "Bicycle Crunches",
        
        // Exercise names - Balance
        "Single-Leg Stands": "Single-Leg Stands",
        "Bosu Ball Exercises": "Bosu Ball Exercises",
        "Tree Pose": "Tree Pose",
        "Side Planks": "Side Planks",
    },
    
    zh: {
        appTitle: "健身追踪器",
        appSubtitle: "记录您的健康之旅",
        recordExercise: "记录运动",
        recordExerciseDesc: "记录您的锻炼",
        viewRecords: "查看记录",
        viewRecordsDesc: "检查您的进度",
        exportData: "导出数据",
        exportDataDesc: "下载您的数据",
        settings: "设置",
        settingsDesc: "自定义您的应用",
        back: "返回",
        selectCategory: "选择类别",
        selectExercise: "选择运动",
        notes: "备注（可选）",
        saveWorkout: "保存锻炼",
        reset: "重置",
        totalWorkouts: "总锻炼次数",
        thisMonth: "本月",
        mostFrequent: "最常做",
        categoryDistribution: "类别分布",
        weeklyActivity: "每周活动",
        workoutHistory: "锻炼历史",
        exportInfo: "将您的锻炼数据下载为CSV文件，可在Excel或Google Sheets中打开。",
        dataPreview: "数据预览",
        downloadCSV: "下载CSV文件",
        language: "语言",
        theme: "主题",
        themeSystem: "系统默认",
        themeLight: "浅色模式",
        themeDark: "深色模式",
        backgroundImage: "背景图片",
        removeBackground: "删除背景",
        dataManagement: "数据管理",
        clearAllData: "清除所有数据",
        clearDataWarning: "⚠️ 这将永久删除您的所有锻炼记录！",
        
        categoryStrength: "力量训练",
        categoryStrengthDesc: "使用重量或体重锻炼肌肉；提高力量和体型。",
        categoryCardio: "有氧运动",
        categoryCardioDesc: "提高心率的活动；有助于耐力和燃烧脂肪。",
        categoryFlexibility: "柔韧性/瑜伽",
        categoryFlexibilityDesc: "拉伸和姿势；增强灵活性，减少受伤风险。",
        categoryHIIT: "高强度间歇训练",
        categoryHIITDesc: "高强度间歇训练；短时间的高强度运动；促进新陈代谢。",
        categoryCore: "核心/腹部训练",
        categoryCoreDesc: "针对腹部；改善稳定性和姿势。",
        categoryBalance: "平衡/稳定性",
        categoryBalanceDesc: "如平板支撑或单腿站立；帮助协调和预防受伤。",
        
        sets: "组数",
        reps: "次数",
        weight: "重量（公斤）",
        duration: "时长（分钟）",
        durationSeconds: "时长（秒）",
        distance: "距离（公里）",
        distanceMiles: "距离（英里）",
        pace: "配速（分钟/公里）",
        speed: "速度（公里/小时）",
        skips: "跳绳次数",
        
        workoutSaved: "锻炼已保存！",
        noData: "还没有锻炼数据。开始记录您的运动吧！",
        confirmClear: "确定要删除所有锻炼数据吗？此操作无法撤消！",
        dataCleared: "所有数据已清除。",
        bgUploaded: "背景图片已上传！",
        bgRemoved: "背景图片已删除。",
        edit: "编辑",
        delete: "删除",
        confirmDelete: "删除此锻炼？",
        
        noWorkouts: "还没有记录锻炼",
        startTracking: "开始记录您的健身之旅！",
        
        // Exercise names - Strength
        "Push-ups": "俯卧撑",
        "Pull-ups": "引体向上",
        "Squats": "深蹲",
        "Deadlifts": "硬拉",
        "Dumbbell Shoulder Press": "哑铃推肩",
        "Bicep Curls": "二头弯举",
        "Tricep Dips": "三头屈伸",
        "Lunges": "弓步",
        "Bench Press": "卧推",
        "Leg Press": "腿举",
        
        // Exercise names - Cardio
        "Running": "跑步",
        "Cycling": "骑车",
        "Swimming": "游泳",
        "Jumping Jacks": "开合跳",
        "Burpees": "波比跳",
        "Stair Climbing": "爬楼梯",
        "Rowing": "划船",
        "Brisk Walking": "快走",
        "Jump Rope": "跳绳",
        "Elliptical": "椭圆机",
        
        // Exercise names - Flexibility
        "Downward Dog": "下犬式",
        "Child's Pose": "婴儿式",
        "Warrior Pose": "战士式",
        "Cat-Cow Stretch": "猫牛式",
        "Hamstring Stretch": "腿筋拉伸",
        "Shoulder Stretch": "肩部拉伸",
        "Cobra Pose": "眼镜蛇式",
        "Seated Forward Bend": "坐位前屈",
        
        // Exercise names - HIIT
        "Mountain Climbers": "登山者",
        "High Knees": "高抬腿",
        "Squat Jumps": "深蹲跳",
        "Tabata Intervals": "塔巴塔间歇",
        "Kettlebell Swings": "壶铃摆动",
        
        // Exercise names - Core
        "Planks": "平板支撑",
        "Russian Twists": "俄罗斯转体",
        "Crunches": "卷腹",
        "Leg Raises": "举腿",
        "Bicycle Crunches": "自行车卷腹",
        
        // Exercise names - Balance
        "Single-Leg Stands": "单腿站立",
        "Bosu Ball Exercises": "波速球训练",
        "Tree Pose": "树式",
        "Side Planks": "侧平板",
    },
    
    es: {
        appTitle: "Rastreador de Fitness",
        appSubtitle: "Rastrea Tu Viaje a la Salud",
        recordExercise: "Registrar Ejercicio",
        recordExerciseDesc: "Registra tu entrenamiento",
        viewRecords: "Ver Registros",
        viewRecordsDesc: "Verifica tu progreso",
        exportData: "Exportar Datos",
        exportDataDesc: "Descarga tus datos",
        settings: "Configuración",
        settingsDesc: "Personaliza tu app",
        back: "Atrás",
        selectCategory: "Seleccionar Categoría",
        selectExercise: "Seleccionar Ejercicio",
        notes: "Notas (Opcional)",
        saveWorkout: "Guardar Entrenamiento",
        reset: "Reiniciar",
        totalWorkouts: "Entrenamientos Totales",
        thisMonth: "Este Mes",
        mostFrequent: "Más Frecuente",
        categoryDistribution: "Distribución por Categoría",
        weeklyActivity: "Actividad Semanal",
        workoutHistory: "Historial de Entrenamientos",
        exportInfo: "Descarga tus datos de entrenamiento como un archivo CSV que se puede abrir en Excel o Google Sheets.",
        dataPreview: "Vista Previa de Datos",
        downloadCSV: "Descargar Archivo CSV",
        language: "Idioma",
        theme: "Tema",
        themeSystem: "Predeterminado del Sistema",
        themeLight: "Modo Claro",
        themeDark: "Modo Oscuro",
        backgroundImage: "Imagen de Fondo",
        removeBackground: "Eliminar Fondo",
        dataManagement: "Gestión de Datos",
        clearAllData: "Borrar Todos los Datos",
        clearDataWarning: "⚠️ ¡Esto eliminará todos tus registros de entrenamiento permanentemente!",
        
        categoryStrength: "Entrenamiento de Fuerza",
        categoryStrengthDesc: "Desarrolla músculo usando pesas o peso corporal; mejora la fuerza y el tono.",
        categoryCardio: "Cardio/Aeróbico",
        categoryCardioDesc: "Actividades que elevan tu frecuencia cardíaca; excelentes para resistencia y quemar grasa.",
        categoryFlexibility: "Flexibilidad/Yoga",
        categoryFlexibilityDesc: "Estiramientos y posturas; mejoran la movilidad y reducen el riesgo de lesiones.",
        categoryHIIT: "HIIT",
        categoryHIITDesc: "Entrenamiento Intervalado de Alta Intensidad; ráfagas cortas de esfuerzo intenso; acelera el metabolismo.",
        categoryCore: "Entrenamientos de Core/Abdominales",
        categoryCoreDesc: "Enfocado en el abdomen; mejora la estabilidad y la postura.",
        categoryBalance: "Equilibrio/Estabilidad",
        categoryBalanceDesc: "Ejercicios como planchas o apoyo en una pierna; ayudan a la coordinación y previenen lesiones.",
        
        sets: "Series",
        reps: "Repeticiones",
        weight: "Peso (kg)",
        duration: "Duración (minutos)",
        durationSeconds: "Duración (segundos)",
        distance: "Distancia (km)",
        distanceMiles: "Distancia (millas)",
        pace: "Ritmo (min/km)",
        speed: "Velocidad (km/h)",
        skips: "Número de Saltos",
        
        workoutSaved: "¡Entrenamiento guardado exitosamente!",
        noData: "Aún no hay datos de entrenamiento. ¡Comienza a registrar tus ejercicios!",
        confirmClear: "¿Estás seguro de que quieres eliminar todos tus datos de entrenamiento? ¡Esto no se puede deshacer!",
        dataCleared: "Todos los datos han sido eliminados.",
        bgUploaded: "¡Imagen de fondo subida!",
        bgRemoved: "Imagen de fondo eliminada.",
        edit: "Editar",
        delete: "Eliminar",
        confirmDelete: "¿Eliminar este entrenamiento?",
        
        noWorkouts: "Aún no hay entrenamientos registrados",
        startTracking: "¡Comienza a rastrear tu viaje de fitness!",
        
        // Exercise names - Strength
        "Push-ups": "Flexiones",
        "Pull-ups": "Dominadas",
        "Squats": "Sentadillas",
        "Deadlifts": "Peso Muerto",
        "Dumbbell Shoulder Press": "Press de Hombros con Mancuernas",
        "Bicep Curls": "Curl de Bíceps",
        "Tricep Dips": "Fondos de Tríceps",
        "Lunges": "Zancadas",
        "Bench Press": "Press de Banca",
        "Leg Press": "Prensa de Piernas",
        
        // Exercise names - Cardio
        "Running": "Correr",
        "Cycling": "Ciclismo",
        "Swimming": "Natación",
        "Jumping Jacks": "Saltos de Tijera",
        "Burpees": "Burpees",
        "Stair Climbing": "Subir Escaleras",
        "Rowing": "Remo",
        "Brisk Walking": "Caminata Rápida",
        "Jump Rope": "Saltar la Cuerda",
        "Elliptical": "Elíptica",
        
        // Exercise names - Flexibility
        "Downward Dog": "Perro Boca Abajo",
        "Child's Pose": "Postura del Niño",
        "Warrior Pose": "Postura del Guerrero",
        "Cat-Cow Stretch": "Estiramiento Gato-Vaca",
        "Hamstring Stretch": "Estiramiento de Isquiotibiales",
        "Shoulder Stretch": "Estiramiento de Hombros",
        "Cobra Pose": "Postura de la Cobra",
        "Seated Forward Bend": "Flexión hacia Adelante Sentado",
        
        // Exercise names - HIIT
        "Mountain Climbers": "Escaladores",
        "High Knees": "Rodillas Altas",
        "Squat Jumps": "Saltos en Sentadilla",
        "Tabata Intervals": "Intervalos Tabata",
        "Kettlebell Swings": "Balanceo con Pesa Rusa",
        
        // Exercise names - Core
        "Planks": "Planchas",
        "Russian Twists": "Giros Rusos",
        "Crunches": "Abdominales",
        "Leg Raises": "Elevaciones de Piernas",
        "Bicycle Crunches": "Abdominales Bicicleta",
        
        // Exercise names - Balance
        "Single-Leg Stands": "Apoyo en Una Pierna",
        "Bosu Ball Exercises": "Ejercicios con Pelota Bosu",
        "Tree Pose": "Postura del Árbol",
        "Side Planks": "Planchas Laterales",
    },
    
    ms: {
        appTitle: "Penjejak Kecergasan",
        appSubtitle: "Jejaki Perjalanan Anda ke Kesihatan",
        recordExercise: "Rekod Senaman",
        recordExerciseDesc: "Catat senaman anda",
        viewRecords: "Lihat Rekod",
        viewRecordsDesc: "Semak kemajuan anda",
        exportData: "Eksport Data",
        exportDataDesc: "Muat turun data anda",
        settings: "Tetapan",
        settingsDesc: "Sesuaikan aplikasi anda",
        back: "Kembali",
        selectCategory: "Pilih Kategori",
        selectExercise: "Pilih Senaman",
        notes: "Nota (Pilihan)",
        saveWorkout: "Simpan Senaman",
        reset: "Set Semula",
        totalWorkouts: "Jumlah Senaman",
        thisMonth: "Bulan Ini",
        mostFrequent: "Paling Kerap",
        categoryDistribution: "Taburan Kategori",
        weeklyActivity: "Aktiviti Mingguan",
        workoutHistory: "Sejarah Senaman",
        exportInfo: "Muat turun data senaman anda sebagai fail CSV yang boleh dibuka di Excel atau Google Sheets.",
        dataPreview: "Pratonton Data",
        downloadCSV: "Muat Turun Fail CSV",
        language: "Bahasa",
        theme: "Tema",
        themeSystem: "Lalai Sistem",
        themeLight: "Mod Cerah",
        themeDark: "Mod Gelap",
        backgroundImage: "Imej Latar Belakang",
        removeBackground: "Buang Latar Belakang",
        dataManagement: "Pengurusan Data",
        clearAllData: "Padam Semua Data",
        clearDataWarning: "⚠️ Ini akan memadam semua rekod senaman anda secara kekal!",
        
        categoryStrength: "Latihan Kekuatan",
        categoryStrengthDesc: "Membina otot menggunakan berat atau berat badan; meningkatkan kuasa dan bentuk.",
        categoryCardio: "Kardio/Aerobik",
        categoryCardioDesc: "Aktiviti yang meningkatkan kadar jantung; bagus untuk daya tahan dan membakar lemak.",
        categoryFlexibility: "Kelenturan/Yoga",
        categoryFlexibilityDesc: "Regangan dan postur; meningkatkan mobiliti dan mengurangkan risiko kecederaan.",
        categoryHIIT: "HIIT",
        categoryHIITDesc: "Latihan Selang Intensiti Tinggi; ledakan usaha sengit yang singkat; meningkatkan metabolisme.",
        categoryCore: "Latihan Teras/Perut",
        categoryCoreDesc: "Sasaran bahagian tengah; meningkatkan kestabilan dan postur.",
        categoryBalance: "Keseimbangan/Kestabilan",
        categoryBalanceDesc: "Senaman seperti papan atau berdiri satu kaki; membantu koordinasi dan mencegah kecederaan.",
        
        sets: "Set",
        reps: "Ulangan",
        weight: "Berat (kg)",
        duration: "Tempoh (minit)",
        durationSeconds: "Tempoh (saat)",
        distance: "Jarak (km)",
        distanceMiles: "Jarak (batu)",
        pace: "Kadar (min/km)",
        speed: "Kelajuan (km/j)",
        skips: "Bilangan Lompatan",
        
        workoutSaved: "Senaman berjaya disimpan!",
        noData: "Belum ada data senaman. Mulakan menjejaki senaman anda!",
        confirmClear: "Adakah anda pasti mahu memadam semua data senaman anda? Ini tidak boleh dibatalkan!",
        dataCleared: "Semua data telah dipadam.",
        bgUploaded: "Imej latar belakang dimuat naik!",
        bgRemoved: "Imej latar belakang dibuang.",
        edit: "Edit",
        delete: "Padam",
        confirmDelete: "Padam senaman ini?",
        
        noWorkouts: "Belum ada senaman direkod",
        startTracking: "Mulakan perjalanan kecergasan anda!",
        
        // Exercise names - Strength
        "Push-ups": "Tekan Tubi",
        "Pull-ups": "Tarik Tubi",
        "Squats": "Skuat",
        "Deadlifts": "Angkat Mati",
        "Dumbbell Shoulder Press": "Tekan Bahu Dumbbell",
        "Bicep Curls": "Ikal Bisep",
        "Tricep Dips": "Celup Trisep",
        "Lunges": "Lunjuran",
        "Bench Press": "Tekan Bangku",
        "Leg Press": "Tekan Kaki",
        
        // Exercise names - Cardio
        "Running": "Berlari",
        "Cycling": "Berbasikal",
        "Swimming": "Berenang",
        "Jumping Jacks": "Lompat Bintang",
        "Burpees": "Burpees",
        "Stair Climbing": "Naik Tangga",
        "Rowing": "Mendayung",
        "Brisk Walking": "Berjalan Pantas",
        "Jump Rope": "Lompat Tali",
        "Elliptical": "Elliptical",
        
        // Exercise names - Flexibility
        "Downward Dog": "Anjing Menghadap Bawah",
        "Child's Pose": "Postur Kanak-kanak",
        "Warrior Pose": "Postur Pahlawan",
        "Cat-Cow Stretch": "Regangan Kucing-Lembu",
        "Hamstring Stretch": "Regangan Hamstring",
        "Shoulder Stretch": "Regangan Bahu",
        "Cobra Pose": "Postur Ular",
        "Seated Forward Bend": "Lenturan Depan Duduk",
        
        // Exercise names - HIIT
        "Mountain Climbers": "Pendaki Gunung",
        "High Knees": "Lutut Tinggi",
        "Squat Jumps": "Lompatan Skuat",
        "Tabata Intervals": "Selang Tabata",
        "Kettlebell Swings": "Hayunan Kettlebell",
        
        // Exercise names - Core
        "Planks": "Papan",
        "Russian Twists": "Pusingan Rusia",
        "Crunches": "Ketuk Perut",
        "Leg Raises": "Angkat Kaki",
        "Bicycle Crunches": "Ketuk Basikal",
        
        // Exercise names - Balance
        "Single-Leg Stands": "Berdiri Satu Kaki",
        "Bosu Ball Exercises": "Latihan Bola Bosu",
        "Tree Pose": "Postur Pokok",
        "Side Planks": "Papan Sisi",
    }
};

// ===================================
// EXERCISE DATABASE
// All exercises with their custom form fields
// ===================================

const exerciseDatabase = {
    strength: {
        name: "categoryStrength",
        desc: "categoryStrengthDesc",
        color: "#e63946",
        icon: "💪",
        exercises: {
            "Push-ups": { fields: ["sets", "reps", "weight"] },
            "Pull-ups": { fields: ["sets", "reps", "weight"] },
            "Squats": { fields: ["sets", "reps", "weight"] },
            "Deadlifts": { fields: ["sets", "reps", "weight"] },
            "Dumbbell Shoulder Press": { fields: ["sets", "reps", "weight"] },
            "Bicep Curls": { fields: ["sets", "reps", "weight"] },
            "Tricep Dips": { fields: ["sets", "reps", "weight"] },
            "Lunges": { fields: ["sets", "reps", "weight"] },
            "Bench Press": { fields: ["sets", "reps", "weight"] },
            "Leg Press": { fields: ["sets", "reps", "weight"] }
        }
    },
    cardio: {
        name: "categoryCardio",
        desc: "categoryCardioDesc",
        color: "#f77f00",
        icon: "🏃",
        exercises: {
            "Running": { fields: ["distance", "duration", "pace"] },
            "Cycling": { fields: ["distance", "duration", "speed"] },
            "Swimming": { fields: ["distance", "duration"] },
            "Jumping Jacks": { fields: ["sets", "reps", "duration"] },
            "Burpees": { fields: ["sets", "reps"] },
            "Stair Climbing": { fields: ["duration", "sets"] },
            "Rowing": { fields: ["distance", "duration"] },
            "Brisk Walking": { fields: ["distance", "duration"] },
            "Jump Rope": { fields: ["skips", "sets", "duration"] },
            "Elliptical": { fields: ["duration", "distance"] }
        }
    },
    flexibility: {
        name: "categoryFlexibility",
        desc: "categoryFlexibilityDesc",
        color: "#06d6a0",
        icon: "🧘",
        exercises: {
            "Downward Dog": { fields: ["durationSeconds", "sets"] },
            "Child's Pose": { fields: ["durationSeconds"] },
            "Warrior Pose": { fields: ["durationSeconds", "sets"] },
            "Cat-Cow Stretch": { fields: ["reps"] },
            "Hamstring Stretch": { fields: ["durationSeconds", "sets"] },
            "Shoulder Stretch": { fields: ["durationSeconds", "sets"] },
            "Cobra Pose": { fields: ["durationSeconds", "sets"] },
            "Seated Forward Bend": { fields: ["durationSeconds"] }
        }
    },
    hiit: {
        name: "categoryHIIT",
        desc: "categoryHIITDesc",
        color: "#7209b7",
        icon: "⚡",
        exercises: {
            "Mountain Climbers": { fields: ["sets", "reps", "duration"] },
            "High Knees": { fields: ["sets", "duration"] },
            "Squat Jumps": { fields: ["sets", "reps"] },
            "Tabata Intervals": { fields: ["sets", "duration"] },
            "Kettlebell Swings": { fields: ["sets", "reps", "weight"] }
        }
    },
    core: {
        name: "categoryCore",
        desc: "categoryCoreDesc",
        color: "#f72585",
        icon: "🔥",
        exercises: {
            "Planks": { fields: ["durationSeconds", "sets"] },
            "Russian Twists": { fields: ["sets", "reps", "weight"] },
            "Crunches": { fields: ["sets", "reps"] },
            "Leg Raises": { fields: ["sets", "reps"] },
            "Bicycle Crunches": { fields: ["sets", "reps"] }
        }
    },
    balance: {
        name: "categoryBalance",
        desc: "categoryBalanceDesc",
        color: "#4361ee",
        icon: "⚖️",
        exercises: {
            "Single-Leg Stands": { fields: ["durationSeconds", "sets"] },
            "Bosu Ball Exercises": { fields: ["duration", "sets"] },
            "Tree Pose": { fields: ["durationSeconds", "sets"] },
            "Side Planks": { fields: ["durationSeconds", "sets"] }
        }
    }
};

// ===================================
// GLOBAL VARIABLES
// Store current state and selections
// ===================================

let currentLanguage = 'en';
let currentTheme = 'system';
let currentCategory = null;
let currentExercise = null;
let editingWorkoutId = null;

// Chart instances (for Chart.js)
let categoryChart = null;
let weeklyChart = null;

// ===================================
// INITIALIZATION
// Run when page loads
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    // Load saved settings from localStorage
    loadSettings();
    
    // Apply theme
    applyTheme();
    
    // Apply language
    updateLanguage();
    
    // Generate category cards
    generateCategories();
    
    // Update history screen
    updateHistory();
    
    // Update export preview
    updateExportPreview();
});

// ===================================
// SCREEN NAVIGATION
// Functions to switch between screens
// ===================================

function showScreen(screenId) {
    // Hide all screens
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => screen.classList.remove('active'));
    
    // Show selected screen
    document.getElementById(screenId).classList.add('active');
    
    // Update content when showing specific screens
    if (screenId === 'historyScreen') {
        updateHistory();
        renderCharts();
    } else if (screenId === 'exportScreen') {
        updateExportPreview();
    } else if (screenId === 'recordScreen') {
        resetRecordingSteps();
    }
}

// ===================================
// MULTI-STEP FORM NAVIGATION
// For the exercise recording process
// ===================================

function resetRecordingSteps() {
    // Go back to category selection
    document.querySelectorAll('#recordScreen .step').forEach(step => {
        step.classList.remove('active');
    });
    document.getElementById('categorySelection').classList.add('active');
    currentCategory = null;
    currentExercise = null;
}

function selectCategory(categoryKey) {
    currentCategory = categoryKey;
    
    // Hide category selection, show exercise selection
    document.getElementById('categorySelection').classList.remove('active');
    document.getElementById('exerciseSelection').classList.add('active');
    
    // Generate exercise list for this category
    generateExerciseList(categoryKey);
}

function backToCategories() {
    document.getElementById('exerciseSelection').classList.remove('active');
    document.getElementById('categorySelection').classList.add('active');
}

function selectExercise(exerciseName) {
    currentExercise = exerciseName;
    
    // Hide exercise selection, show form
    document.getElementById('exerciseSelection').classList.remove('active');
    document.getElementById('exerciseForm').classList.add('active');
    
    // Generate dynamic form fields
    generateExerciseForm(currentCategory, exerciseName);
}

function backToExercises() {
    document.getElementById('exerciseForm').classList.remove('active');
    document.getElementById('exerciseSelection').classList.add('active');
    resetForm();
}

// ===================================
// CATEGORY & EXERCISE GENERATION
// Create UI elements dynamically
// ===================================

function generateCategories() {
    const container = document.getElementById('categoryCards');
    container.innerHTML = '';
    
    for (const [key, category] of Object.entries(exerciseDatabase)) {
        const card = document.createElement('div');
        card.className = `category-card ${key}`;
        card.onclick = () => selectCategory(key);
        
        card.innerHTML = `
            <h3>${category.icon} <span data-lang="${category.name}">${translations[currentLanguage][category.name]}</span></h3>
            <p data-lang="${category.desc}">${translations[currentLanguage][category.desc]}</p>
        `;
        
        container.appendChild(card);
    }
}

function generateExerciseList(categoryKey) {
    const container = document.getElementById('exerciseList');
    container.innerHTML = '';
    
    const exercises = exerciseDatabase[categoryKey].exercises;
    
    for (const exerciseName of Object.keys(exercises)) {
        const item = document.createElement('div');
        item.className = 'exercise-item';
        // Use translated name if available, otherwise use original name
        item.textContent = translations[currentLanguage][exerciseName] || exerciseName;
        item.onclick = () => selectExercise(exerciseName);
        
        container.appendChild(item);
    }
}

// ===================================
// DYNAMIC FORM GENERATION
// Create form fields based on exercise type
// ===================================

function generateExerciseForm(categoryKey, exerciseName) {
    const category = exerciseDatabase[categoryKey];
    const exercise = category.exercises[exerciseName];
    
    // Update form title with translated name
    document.getElementById('exerciseFormTitle').textContent = translations[currentLanguage][exerciseName] || exerciseName;
    
    // Generate form fields
    const container = document.getElementById('dynamicFormFields');
    container.innerHTML = '';
    
    const fields = exercise.fields;
    
    // Create appropriate input fields based on exercise requirements
    fields.forEach(field => {
        const formGroup = document.createElement('div');
        formGroup.className = 'form-group';
        
        const label = document.createElement('label');
        label.setAttribute('data-lang', field);
        label.textContent = translations[currentLanguage][field] || field;
        
        const input = document.createElement('input');
        input.type = 'number';
        input.step = field.includes('duration') || field.includes('pace') || field.includes('speed') ? '0.1' : '1';
        input.min = '0';
        input.id = `field_${field}`;
        input.required = true;
        
        formGroup.appendChild(label);
        formGroup.appendChild(input);
        container.appendChild(formGroup);
    });
}

// ===================================
// WORKOUT SAVING
// Save exercise data to localStorage
// ===================================

function saveWorkout(event) {
    event.preventDefault();
    
    // Collect form data
    const formData = {
        id: editingWorkoutId || Date.now().toString(),
        date: new Date().toISOString().split('T')[0],
        timestamp: new Date().toISOString(),
        category: currentCategory,
        exercise: currentExercise,
        fields: {},
        notes: document.getElementById('notes').value
    };
    
    // Get all dynamic field values
    const fields = exerciseDatabase[currentCategory].exercises[currentExercise].fields;
    fields.forEach(field => {
        const input = document.getElementById(`field_${field}`);
        if (input) {
            formData.fields[field] = input.value;
        }
    });
    
    // Get existing workouts from localStorage
    let workouts = JSON.parse(localStorage.getItem('workouts') || '[]');
    
    if (editingWorkoutId) {
        // Update existing workout
        const index = workouts.findIndex(w => w.id === editingWorkoutId);
        if (index !== -1) {
            workouts[index] = formData;
        }
    } else {
        // Add new workout
        workouts.push(formData);
    }
    
    // Save to localStorage
    localStorage.setItem('workouts', JSON.stringify(workouts));
    
    // Show success message
    alert(translations[currentLanguage].workoutSaved);
    
    // Reset and go back to home
    resetForm();
    showScreen('homeScreen');
}

function resetForm() {
    document.getElementById('workoutForm').reset();
    editingWorkoutId = null;
}

// ===================================
// HISTORY & STATISTICS
// Display workout history and stats
// ===================================

function updateHistory() {
    const workouts = JSON.parse(localStorage.getItem('workouts') || '[]');
    
    // Update summary stats
    updateSummaryStats(workouts);
    
    // Update history list
    updateHistoryList(workouts);
}

function updateSummaryStats(workouts) {
    // Total workouts
    document.getElementById('totalWorkouts').textContent = workouts.length;
    
    // This month
    const now = new Date();
    const thisMonthWorkouts = workouts.filter(w => {
        const workoutDate = new Date(w.date);
        return workoutDate.getMonth() === now.getMonth() && 
               workoutDate.getFullYear() === now.getFullYear();
    });
    document.getElementById('thisMonth').textContent = thisMonthWorkouts.length;
    
    // Most frequent exercise
    if (workouts.length > 0) {
        const exerciseCounts = {};
        workouts.forEach(w => {
            exerciseCounts[w.exercise] = (exerciseCounts[w.exercise] || 0) + 1;
        });
        const mostFrequent = Object.keys(exerciseCounts).reduce((a, b) => 
            exerciseCounts[a] > exerciseCounts[b] ? a : b
        );
        document.getElementById('mostFrequent').textContent = mostFrequent;
    } else {
        document.getElementById('mostFrequent').textContent = '-';
    }
}

function updateHistoryList(workouts) {
    const container = document.getElementById('historyList');
    
    if (workouts.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">📭</div>
                <p data-lang="noWorkouts">${translations[currentLanguage].noWorkouts}</p>
            </div>
        `;
        return;
    }
    
    // Sort by date (newest first)
    workouts.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
    
    container.innerHTML = '';
    
    workouts.forEach(workout => {
        const item = document.createElement('div');
        item.className = 'history-item';
        
        // Format details
        let details = '';
        for (const [field, value] of Object.entries(workout.fields)) {
            const fieldName = translations[currentLanguage][field] || field;
            details += `${fieldName}: ${value}, `;
        }
        details = details.slice(0, -2); // Remove trailing comma
        
        item.innerHTML = `
            <div class="history-item-header">
                <span class="history-date">${workout.date}</span>
                <div class="history-actions">
                    <button onclick="editWorkout('${workout.id}')" data-lang="edit">${translations[currentLanguage].edit}</button>
                    <button onclick="deleteWorkout('${workout.id}')" data-lang="delete">${translations[currentLanguage].delete}</button>
                </div>
            </div>
            <div class="history-item-content">
                <strong>${workout.exercise}</strong>
                <div class="history-item-details">${details}</div>
                ${workout.notes ? `<div class="history-item-notes">${workout.notes}</div>` : ''}
            </div>
        `;
        
        container.appendChild(item);
    });
}

function editWorkout(id) {
    const workouts = JSON.parse(localStorage.getItem('workouts') || '[]');
    const workout = workouts.find(w => w.id === id);
    
    if (!workout) return;
    
    // Set editing mode
    editingWorkoutId = id;
    currentCategory = workout.category;
    currentExercise = workout.exercise;
    
    // Show record screen
    showScreen('recordScreen');
    
    // Skip to form
    document.querySelectorAll('#recordScreen .step').forEach(step => {
        step.classList.remove('active');
    });
    document.getElementById('exerciseForm').classList.add('active');
    
    // Generate form and populate with existing data
    generateExerciseForm(workout.category, workout.exercise);
    
    // Fill in values
    setTimeout(() => {
        for (const [field, value] of Object.entries(workout.fields)) {
            const input = document.getElementById(`field_${field}`);
            if (input) input.value = value;
        }
        document.getElementById('notes').value = workout.notes || '';
    }, 100);
}

function deleteWorkout(id) {
    if (confirm(translations[currentLanguage].confirmDelete)) {
        let workouts = JSON.parse(localStorage.getItem('workouts') || '[]');
        workouts = workouts.filter(w => w.id !== id);
        localStorage.setItem('workouts', JSON.stringify(workouts));
        updateHistory();
        renderCharts();
    }
}

// ===================================
// CHARTS & VISUALIZATION
// Using Chart.js library
// ===================================

function renderCharts() {
    // Only render charts if we're on the history screen
    if (!document.getElementById('historyScreen').classList.contains('active')) {
        return;
    }
    
    const workouts = JSON.parse(localStorage.getItem('workouts') || '[]');
    
    // Category Distribution Pie Chart
    renderCategoryChart(workouts);
    
    // Weekly Activity Bar Chart
    renderWeeklyChart(workouts);
}

function renderCategoryChart(workouts) {
    const ctx = document.getElementById('categoryChart');
    
    // Check if element exists and has a parent
    if (!ctx || !ctx.parentElement) return;
    
    // Count workouts by category
    const categoryCounts = {};
    workouts.forEach(w => {
        const categoryName = translations[currentLanguage][exerciseDatabase[w.category].name];
        categoryCounts[categoryName] = (categoryCounts[categoryName] || 0) + 1;
    });
    
    const labels = Object.keys(categoryCounts);
    const data = Object.values(categoryCounts);
    const colors = Object.values(exerciseDatabase).map(cat => cat.color);
    
    // Destroy previous chart if exists
    if (categoryChart) {
        categoryChart.destroy();
        categoryChart = null;
    }
    
    if (workouts.length === 0) {
        ctx.parentElement.innerHTML = '<p class="text-center" style="padding: 2rem;">' + 
            translations[currentLanguage].noData + '</p>';
        return;
    }
    
    categoryChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: labels,
            datasets: [{
                data: data,
                backgroundColor: colors,
                borderWidth: 2,
                borderColor: '#fff'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });
}

function renderWeeklyChart(workouts) {
    const ctx = document.getElementById('weeklyChart');
    
    // Check if element exists and has a parent
    if (!ctx || !ctx.parentElement) return;
    
    // Get last 7 days
    const days = [];
    const counts = [];
    
    for (let i = 6; i >= 0; i--) {
        const date = new Date();
        date.setDate(date.getDate() - i);
        const dateString = date.toISOString().split('T')[0];
        
        days.push(date.toLocaleDateString(currentLanguage === 'zh' ? 'zh-CN' : 
                  currentLanguage === 'es' ? 'es-ES' : 
                  currentLanguage === 'ms' ? 'ms-MY' : 'en-US', 
                  { weekday: 'short' }));
        
        const dayWorkouts = workouts.filter(w => w.date === dateString);
        counts.push(dayWorkouts.length);
    }
    
    // Destroy previous chart if exists
    if (weeklyChart) {
        weeklyChart.destroy();
        weeklyChart = null;
    }
    
    weeklyChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: days,
            datasets: [{
                label: translations[currentLanguage].totalWorkouts,
                data: counts,
                backgroundColor: 'rgba(0, 180, 216, 0.7)',
                borderColor: 'rgba(0, 180, 216, 1)',
                borderWidth: 2,
                borderRadius: 8
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        stepSize: 1
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
}

// ===================================
// CSV EXPORT
// Download workout data as CSV file
// ===================================

function updateExportPreview() {
    const workouts = JSON.parse(localStorage.getItem('workouts') || '[]');
    const preview = document.getElementById('exportPreview');
    
    if (workouts.length === 0) {
        preview.textContent = translations[currentLanguage].noData;
        return;
    }
    
    const csv = generateCSV(workouts);
    const lines = csv.split('\n').slice(0, 10); // Show first 10 lines
    preview.textContent = lines.join('\n') + '\n...(more rows)';
}

function generateCSV(workouts) {
    // CSV header
    let csv = 'Date,Category,Exercise,Details,Notes\n';
    
    // Sort by date
    workouts.sort((a, b) => new Date(a.date) - new Date(b.date));
    
    workouts.forEach(workout => {
        const category = translations[currentLanguage][exerciseDatabase[workout.category].name];
        const exercise = workout.exercise;
        
        // Format details
        let details = '';
        for (const [field, value] of Object.entries(workout.fields)) {
            const fieldName = translations[currentLanguage][field] || field;
            details += `${fieldName}: ${value}; `;
        }
        
        const notes = (workout.notes || '').replace(/,/g, ';').replace(/\n/g, ' ');
        
        csv += `${workout.date},"${category}","${exercise}","${details}","${notes}"\n`;
    });
    
    return csv;
}

function downloadCSV() {
    const workouts = JSON.parse(localStorage.getItem('workouts') || '[]');
    
    if (workouts.length === 0) {
        alert(translations[currentLanguage].noData);
        return;
    }
    
    const csv = generateCSV(workouts);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    
    link.setAttribute('href', url);
    link.setAttribute('download', `fitness-tracker-${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// ===================================
// SETTINGS - LANGUAGE
// Switch between languages
// ===================================

function changeLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    updateLanguage();
    
    // Refresh dynamic content
    generateCategories();
    updateHistory();
    renderCharts();
    updateExportPreview();
    
    // Refresh exercise list if currently viewing it
    if (currentCategory && document.getElementById('exerciseSelection').classList.contains('active')) {
        generateExerciseList(currentCategory);
    }
    
    // Refresh exercise form completely if currently viewing it
    if (currentExercise && currentCategory && document.getElementById('exerciseForm').classList.contains('active')) {
        // Store current form values before regenerating
        const fields = exerciseDatabase[currentCategory].exercises[currentExercise].fields;
        const savedValues = {};
        fields.forEach(field => {
            const input = document.getElementById(`field_${field}`);
            if (input) {
                savedValues[field] = input.value;
            }
        });
        const savedNotes = document.getElementById('notes').value || '';
        
        // Regenerate the form with new translations
        generateExerciseForm(currentCategory, currentExercise);
        
        // Restore values (including zeros and empty strings)
        fields.forEach(field => {
            const input = document.getElementById(`field_${field}`);
            if (input && savedValues.hasOwnProperty(field)) {
                input.value = savedValues[field];
            }
        });
        document.getElementById('notes').value = savedNotes;
    }
}

function updateLanguage() {
    // Update all elements with data-lang attribute
    document.querySelectorAll('[data-lang]').forEach(element => {
        const key = element.getAttribute('data-lang');
        const translation = translations[currentLanguage][key];
        
        if (translation) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translation;
            } else if (element.tagName === 'OPTION') {
                element.textContent = translation;
            } else {
                element.textContent = translation;
            }
        }
    });
    
    // Update language selector
    document.getElementById('languageSelect').value = currentLanguage;
}

// ===================================
// SETTINGS - THEME
// Switch between light/dark themes
// ===================================

function changeTheme(theme) {
    currentTheme = theme;
    localStorage.setItem('theme', theme);
    applyTheme();
}

function applyTheme() {
    const body = document.body;
    
    if (currentTheme === 'system') {
        // Use system preference
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        body.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
    } else {
        body.setAttribute('data-theme', currentTheme);
    }
    
    // Update theme selector
    document.getElementById('themeSelect').value = currentTheme;
}

// Listen for system theme changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    if (currentTheme === 'system') {
        applyTheme();
    }
});

// ===================================
// SETTINGS - BACKGROUND IMAGE
// Upload and manage background image
// ===================================

function uploadBackground(event) {
    const file = event.target.files[0];
    
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = function(e) {
        const imageData = e.target.result;
        localStorage.setItem('backgroundImage', imageData);
        applyBackground();
        alert(translations[currentLanguage].bgUploaded);
    };
    reader.readAsDataURL(file);
}

function removeBackground() {
    localStorage.removeItem('backgroundImage');
    document.body.classList.remove('has-background');
    document.body.style.backgroundImage = '';
    alert(translations[currentLanguage].bgRemoved);
}

function applyBackground() {
    const imageData = localStorage.getItem('backgroundImage');
    if (imageData) {
        document.body.classList.add('has-background');
        document.body.style.backgroundImage = `url(${imageData})`;
    }
}

// ===================================
// SETTINGS - DATA MANAGEMENT
// Clear all workout data
// ===================================

function clearAllData() {
    if (confirm(translations[currentLanguage].confirmClear)) {
        localStorage.removeItem('workouts');
        alert(translations[currentLanguage].dataCleared);
        updateHistory();
        renderCharts();
        updateExportPreview();
        showScreen('homeScreen');
    }
}

// ===================================
// LOAD SETTINGS
// Load user preferences from localStorage
// ===================================

function loadSettings() {
    // Load language
    currentLanguage = localStorage.getItem('language') || 'en';
    
    // Load theme
    currentTheme = localStorage.getItem('theme') || 'system';
    
    // Load background image
    applyBackground();
}
