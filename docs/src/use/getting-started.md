<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>نظام التقييم النفسي السريري المتكامل</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700&display=swap" rel="stylesheet">
    <style>
        :root {
            --primary-bg: #f0f5fa;
            --shadow-dark: #d1d9e6;
            --shadow-light: #ffffff;
            --accent-blue: #4a90e2;
            --accent-red: #e74c3c;
            --accent-green: #2ecc71;
            --accent-purple: #9b59b6;
            --text-primary: #2c3e50;
            --text-secondary: #7f8c8d;
            --card-radius: 25px;
            --element-radius: 15px;
            --transition-speed: 0.3s;
        }

        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        body {
            font-family: 'Tajawal', sans-serif;
            background: var(--primary-bg);
            color: var(--text-primary);
            line-height: 1.6;
            padding: 20px;
            min-height: 100vh;
            transition: background var(--transition-speed);
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
        }

        /* التصميم النيومورفيك الأساسي */
        .neumorphic-card {
            background: var(--primary-bg);
            border-radius: var(--card-radius);
            padding: 30px;
            margin-bottom: 30px;
            box-shadow: 
                12px 12px 24px var(--shadow-dark),
                -12px -12px 24px var(--shadow-light);
            transition: all var(--transition-speed);
            position: relative;
            overflow: hidden;
        }

        .neumorphic-card:hover {
            box-shadow: 
                8px 8px 16px var(--shadow-dark),
                -8px -8px 16px var(--shadow-light);
        }

        .neumorphic-card.primary {
            border-left: 4px solid var(--accent-blue);
        }

        .neumorphic-card.warning {
            border-left: 4px solid var(--accent-red);
        }

        .neumorphic-inset {
            background: var(--primary-bg);
            border-radius: var(--element-radius);
            box-shadow: 
                inset 4px 4px 8px var(--shadow-dark),
                inset -4px -4px 8px var(--shadow-light);
            padding: 20px;
        }

        .neumorphic-btn {
            border: none;
            padding: 15px 30px;
            border-radius: var(--element-radius);
            background: var(--primary-bg);
            box-shadow: 
                6px 6px 12px var(--shadow-dark),
                -6px -6px 12px var(--shadow-light);
            transition: all var(--transition-speed);
            cursor: pointer;
            font-family: 'Tajawal', sans-serif;
            font-size: 16px;
            font-weight: 500;
            margin: 8px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            min-width: 180px;
        }

        .neumorphic-btn i {
            margin-left: 8px;
        }

        .neumorphic-btn:active {
            box-shadow: 
                inset 4px 4px 8px var(--shadow-dark),
                inset -4px -4px 8px var(--shadow-light);
        }

        .neumorphic-btn.primary {
            color: var(--accent-blue);
        }

        .neumorphic-btn.success {
            color: var(--accent-green);
        }

        .neumorphic-btn.danger {
            color: var(--accent-red);
        }

        .neumorphic-btn.large {
            padding: 20px 40px;
            font-size: 18px;
            border-radius: var(--card-radius);
        }

        /* عناصر الواجهة */
        .header-section {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 30px;
        }

        .app-title {
            color: var(--accent-blue);
            font-size: 28px;
            font-weight: 700;
            margin: 0;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
        }

        .logo {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            box-shadow: 
                8px 8px 16px var(--shadow-dark),
                -8px -8px 16px var(--shadow-light);
            transition: transform 0.3s;
        }

        .logo:hover {
            transform: rotate(15deg);
        }

        .logo i {
            font-size: 28px;
            color: var(--accent-blue);
        }

        .dashboard-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 25px;
            margin-bottom: 30px;
        }

        .card-title {
            font-size: 20px;
            margin-bottom: 20px;
            color: var(--accent-blue);
            display: flex;
            align-items: center;
        }

        .card-title i {
            margin-left: 10px;
        }

        /* واجهة دراسة الحالة */
        .case-form {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
        }

        .form-group {
            margin-bottom: 20px;
        }

        .form-group label {
            display: block;
            margin-bottom: 8px;
            font-weight: 500;
            color: var(--text-secondary);
        }

        .neumorphic-input {
            width: 100%;
            padding: 12px 15px;
            border: none;
            border-radius: var(--element-radius);
            background: var(--primary-bg);
            box-shadow: 
                inset 3px 3px 6px var(--shadow-dark),
                inset -3px -3px 6px var(--shadow-light);
            font-family: 'Tajawal', sans-serif;
            font-size: 16px;
            color: var(--text-primary);
            transition: all var(--transition-speed);
        }

        .neumorphic-input:focus {
            outline: none;
            box-shadow: 
                inset 2px 2px 4px var(--shadow-dark),
                inset -2px -2px 4px var(--shadow-light);
        }

        .form-actions {
            grid-column: span 2;
            display: flex;
            justify-content: flex-end;
            margin-top: 20px;
        }

        /* واجهة الاختبارات */
        .test-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 25px;
        }

        .progress-container {
            display: flex;
            align-items: center;
        }

        .progress-indicator {
            background: var(--primary-bg);
            padding: 8px 20px;
            border-radius: 20px;
            box-shadow: 
                inset 3px 3px 6px var(--shadow-dark),
                inset -3px -3px 6px var(--shadow-light);
            margin-right: 15px;
            font-weight: 500;
        }

        .heartbeat-progress {
            width: 100px;
            height: 30px;
            position: relative;
            overflow: hidden;
            border-radius: 15px;
            box-shadow: 
                inset 2px 2px 4px var(--shadow-dark),
                inset -2px -2px 4px var(--shadow-light);
        }

        .heartbeat-bar {
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 0%;
            background: linear-gradient(90deg, var(--accent-red), var(--accent-purple));
            border-radius: 15px;
            animation: heartbeat 1.5s infinite;
        }

        @keyframes heartbeat {
            0% { width: 0%; opacity: 0.7; }
            50% { width: 70%; opacity: 1; }
            100% { width: 100%; opacity: 0.7; }
        }

        .question-container {
            margin-bottom: 30px;
        }

        .neumorphic-question-card {
            background: var(--primary-bg);
            padding: 25px;
            border-radius: var(--card-radius);
            box-shadow: 
                inset 4px 4px 8px var(--shadow-dark),
                inset -4px -4px 8px var(--shadow-light);
            margin-bottom: 20px;
        }

        .question-text {
            font-size: 18px;
            font-weight: 500;
            margin-bottom: 20px;
        }

        .rating-scale {
            display: flex;
            flex-direction: column;
            gap: 12px;
            margin-top: 15px;
        }

        .rating-option {
            padding: 12px 20px;
            border-radius: var(--element-radius);
            background: var(--primary-bg);
            box-shadow: 
                4px 4px 8px var(--shadow-dark),
                -4px -4px 8px var(--shadow-light);
            cursor: pointer;
            transition: all var(--transition-speed);
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .rating-option:hover {
            transform: translateY(-2px);
            box-shadow: 
                6px 6px 12px var(--shadow-dark),
                -6px -6px 12px var(--shadow-light);
        }

        .rating-option.selected {
            box-shadow: 
                inset 3px 3px 6px var(--shadow-dark),
                inset -3px -3px 6px var(--shadow-light);
            color: var(--accent-blue);
            font-weight: 500;
        }

        .option-value {
            font-weight: 700;
            color: var(--accent-purple);
        }

        .navigation-btns {
            display: flex;
            justify-content: space-between;
            margin-top: 30px;
        }

        /* واجهة النتائج */
        .results-header {
            text-align: center;
            margin-bottom: 40px;
        }

        .total-score {
            font-size: 72px;
            font-weight: 700;
            color: var(--accent-blue);
            display: inline-block;
            padding: 20px 40px;
            border-radius: var(--card-radius);
            margin: 30px 0;
            box-shadow: 
                8px 8px 16px var(--shadow-dark),
                -8px -8px 16px var(--shadow-light);
            position: relative;
            overflow: hidden;
        }

        .total-score::after {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: linear-gradient(
                to bottom right,
                rgba(255,255,255,0.3),
                rgba(255,255,255,0)
            );
            transform: rotate(30deg);
        }

        .score-label {
            font-size: 24px;
            color: var(--text-secondary);
        }

        .interpretation-section {
            margin-bottom: 40px;
        }

        .severity-indicator {
            display: flex;
            align-items: center;
            margin-bottom: 20px;
        }

        .severity-level {
            width: 100%;
            height: 30px;
            border-radius: 15px;
            background: linear-gradient(90deg, var(--accent-green), var(--accent-yellow), var(--accent-red));
            box-shadow: 
                inset 2px 2px 4px var(--shadow-dark),
                inset -2px -2px 4px var(--shadow-light);
            position: relative;
            overflow: hidden;
        }

        .severity-marker {
            position: absolute;
            top: -5px;
            width: 3px;
            height: 40px;
            background: var(--text-primary);
            transform: translateX(-50%);
        }

        .severity-labels {
            display: flex;
            justify-content: space-between;
            margin-top: 10px;
            font-size: 14px;
            color: var(--text-secondary);
        }

        .chart-container {
            width: 100%;
            height: 300px;
            margin: 40px 0;
        }

        .symptom-breakdown {
            margin-top: 40px;
        }

        .symptom-item {
            display: flex;
            align-items: center;
            margin-bottom: 15px;
        }

        .symptom-name {
            width: 200px;
            font-weight: 500;
        }

        .symptom-bar-container {
            flex-grow: 1;
            height: 20px;
            border-radius: 10px;
            background: var(--primary-bg);
            box-shadow: 
                inset 2px 2px 4px var(--shadow-dark),
                inset -2px -2px 4px var(--shadow-light);
            overflow: hidden;
            margin: 0 15px;
        }

        .symptom-bar {
            height: 100%;
            background: linear-gradient(90deg, var(--accent-blue), var(--accent-purple));
            border-radius: 10px;
            transition: width 0.5s ease;
        }

        .symptom-score {
            width: 30px;
            text-align: center;
            font-weight: 700;
            color: var(--accent-blue);
        }

        /* لوحة الدعم التشخيصي */
        .diagnostic-panel {
            margin-top: 40px;
        }

        .criteria-item {
            display: flex;
            align-items: flex-start;
            margin-bottom: 20px;
            padding: 15px;
            border-radius: var(--element-radius);
            background: var(--primary-bg);
            box-shadow: 
                4px 4px 8px var(--shadow-dark),
                -4px -4px 8px var(--shadow-light);
        }

        .criteria-icon {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-left: 15px;
            flex-shrink: 0;
            box-shadow: 
                3px 3px 6px var(--shadow-dark),
                -3px -3px 6px var(--shadow-light);
        }

        .criteria-icon i {
            font-size: 14px;
        }

        .criteria-content {
            flex-grow: 1;
        }

        .criteria-title {
            font-weight: 500;
            margin-bottom: 5px;
            color: var(--accent-blue);
        }

        .recommendations-list {
            list-style-type: none;
        }

        .recommendation-item {
            padding: 15px;
            margin-bottom: 15px;
            border-radius: var(--element-radius);
            background: var(--primary-bg);
            box-shadow: 
                4px 4px 8px var(--shadow-dark),
                -4px -4px 8px var(--shadow-light);
            display: flex;
            align-items: center;
            transition: all var(--transition-speed);
        }

        .recommendation-item:hover {
            transform: translateY(-3px);
            box-shadow: 
                6px 6px 12px var(--shadow-dark),
                -6px -6px 12px var(--shadow-light);
        }

        .recommendation-icon {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-left: 15px;
            background: var(--accent-blue);
            color: white;
            flex-shrink: 0;
            box-shadow: 
                3px 3px 6px var(--shadow-dark),
                -3px -3px 6px var(--shadow-light);
        }

        .recommendation-text {
            flex-grow: 1;
        }

        /* التأثيرات والتحريك */
        @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
        }

        .floating {
            animation: float 3s ease-in-out infinite;
        }

        .pulse {
            animation: pulse 2s infinite;
        }

        @keyframes pulse {
            0% { box-shadow: 0 0 0 0 rgba(74, 144, 226, 0.7); }
            70% { box-shadow: 0 0 0 15px rgba(74, 144, 226, 0); }
            100% { box-shadow: 0 0 0 0 rgba(74, 144, 226, 0); }
        }

        /* الطباعة */
        @media print {
            body {
                background: white;
                color: black;
            }
            
            .neumorphic-card, .neumorphic-btn {
                box-shadow: none;
                background: white;
            }
            
            .no-print {
                display: none;
            }
        }

        /* إخفاء العناصر */
        .hidden {
            display: none;
        }

        /* الوضع الليلي */
        body.dark-mode {
            --primary-bg: #1a1a2e;
            --shadow-dark: #0f0f1a;
            --shadow-light: #252544;
            --text-primary: #e6e6e6;
            --text-secondary: #b3b3b3;
        }

        /* للهواتف المحمولة */
        @media (max-width: 768px) {
            .container {
                padding: 10px;
            }
            
            .dashboard-grid {
                grid-template-columns: 1fr;
            }
            
            .case-form {
                grid-template-columns: 1fr;
            }
            
            .form-actions {
                grid-column: span 1;
                flex-direction: column;
            }
            
            .neumorphic-btn {
                width: 100%;
                margin: 5px 0;
            }
            
            .test-header {
                flex-direction: column;
                align-items: flex-start;
            }
            
            .progress-container {
                margin-top: 15px;
                width: 100%;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <!-- الشاشة الرئيسية -->
        <div class="neumorphic-card" id="main-dashboard">
            <div class="header-section">
                <h1 class="app-title">
                    <i class="fas fa-brain"></i> نظام التقييم النفسي السريري المتكامل
                </h1>
                <div class="logo pulse" onclick="toggleDarkMode()">
                    <i class="fas fa-moon"></i>
                </div>
            </div>
            
            <div class="dashboard-grid">
                <div class="neumorphic-card primary">
                    <h2 class="card-title">
                        <i class="fas fa-user-chart"></i> دراسة الحالة
                    </h2>
                    <p>إنشاء وتعديل ملف شامل للمريض يحتوي على البيانات الديموغرافية، التاريخ الطبي، التاريخ العائلي، والملاحظات السريرية.</p>
                    <button class="neumorphic-btn primary large" onclick="openCaseStudy()">
                        <i class="fas fa-file-medical"></i> فتح دراسة الحالة
                    </button>
                </div>
                
                <div class="neumorphic-card primary">
                    <h2 class="card-title">
                        <i class="fas fa-file-medical-alt"></i> التقارير النفسية العيادية
                    </h2>
                    <p>إنشاء تقارير نفسية عيادية مفصلة قابلة للتعديل تحتوي على جميع البيانات والمقاييس التشخيصية.</p>
                    <button class="neumorphic-btn primary large" onclick="openClinicalReports()">
                        <i class="fas fa-clipboard-list"></i> إنشاء تقرير
                    </button>
                </div>
            </div>
            
            <div class="assessment-options">
                <h2 class="card-title">
                    <i class="fas fa-clipboard-check"></i> أدوات التقييم
                </h2>
                
                <div class="dashboard-grid">
                    <div class="neumorphic-card">
                        <h3 class="card-title">
                            <i class="fas fa-heartbeat"></i> اختبار هاملتون للقلق (HAM-A)
                        </h3>
                        <p>مقياس تقييم القلق المكون من 14 بندًا يستخدم لتقييم شدة أعراض القلق.</p>
                        <button class="neumorphic-btn primary" onclick="openHamiltonTest()">
                            <i class="fas fa-play"></i> بدء الاختبار
                        </button>
                    </div>
                    
                    <div class="neumorphic-card">
                        <h3 class="card-title">
                            <i class="fas fa-depression"></i> اختبار بيك للاكتئاب (BDI)
                        </h3>
                        <p>مقياس مكون من 21 بندًا يستخدم لقياس شدة الاكتئاب لدى البالغين والمراهقين.</p>
                        <button class="neumorphic-btn primary" onclick="showComingSoon()">
                            <i class="fas fa-play"></i> بدء الاختبار
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- واجهة دراسة الحالة -->
        <div class="neumorphic-card hidden" id="case-study">
            <div class="header-section">
                <h2 class="card-title">
                    <i class="fas fa-user-chart"></i> دراسة الحالة
                </h2>
                <button class="neumorphic-btn secondary" onclick="backToDashboard()">
                    <i class="fas fa-arrow-right"></i> العودة
                </button>
            </div>
            
            <div class="neumorphic-inset">
                <form id="case-study-form" class="case-form">
                    <div class="form-group">
                        <label>الاسم الكامل</label>
                        <input type="text" class="neumorphic-input" placeholder="أدخل الاسم الكامل" required>
                    </div>
                    
                    <div class="form-group">
                        <label>تاريخ الميلاد</label>
                        <input type="date" class="neumorphic-input" required>
                    </div>
                    
                    <div class="form-group">
                        <label>العمر الزمني</label>
                        <input type="number" class="neumorphic-input" placeholder="أدخل العمر" min="1" max="120" required>
                    </div>
                    
                    <div class="form-group">
                        <label>الجنس</label>
                        <select class="neumorphic-input" required>
                            <option value="">اختر الجنس</option>
                            <option value="male">ذكر</option>
                            <option value="female">أنثى</option>
                        </select>
                    </div>
                    
                    <div class="form-group">
                        <label>الحالة الاجتماعية</label>
                        <select class="neumorphic-input" required>
                            <option value="">اختر الحالة الاجتماعية</option>
                            <option value="single">أعزب</option>
                            <option value="married">متزوج</option>
                            <option value="divorced">مطلق</option>
                            <option value="widowed">أرمل</option>
                        </select>
                    </div>
                    
                    <div class="form-group">
                        <label>المستوى التعليمي</label>
                        <input type="text" class="neumorphic-input" placeholder="أدخل المستوى التعليمي" required>
                    </div>
                    
                    <div class="form-group">
                        <label>المهنة</label>
                        <input type="text" class="neumorphic-input" placeholder="أدخل المهنة" required>
                    </div>
                    
                    <div class="form-group">
                        <label>تاريخ الفحص</label>
                        <input type="date" class="neumorphic-input" required>
                    </div>
                    
                    <div class="form-group" style="grid-column: span 2;">
                        <label>الملاحظات السريرية الأولية</label>
                        <textarea class="neumorphic-input" rows="4" placeholder="أدخل الملاحظات السريرية" required></textarea>
                    </div>
                    
                    <div class="form-group" style="grid-column: span 2;">
                        <label>التاريخ النفسي المرضي</label>
                        <textarea class="neumorphic-input" rows="4" placeholder="أدخل التاريخ النفسي المرضي" required></textarea>
                    </div>
                    
                    <div class="form-actions">
                        <button type="button" class="neumorphic-btn danger" onclick="backToDashboard()">
                            <i class="fas fa-times"></i> إلغاء
                        </button>
                        <button type="submit" class="neumorphic-btn success">
                            <i class="fas fa-save"></i> حفظ الحالة
                        </button>
                    </div>
                </form>
            </div>
        </div>

        <!-- واجهة التقارير النفسية العيادية -->
        <div class="neumorphic-card hidden" id="clinical-reports">
            <div class="header-section">
                <h2 class="card-title">
                    <i class="fas fa-file-medical-alt"></i> التقرير النفسي العيادي
                </h2>
                <button class="neumorphic-btn secondary" onclick="backToDashboard()">
                    <i class="fas fa-arrow-right"></i> العودة
                </button>
            </div>
            
            <div class="neumorphic-inset">
                <form id="clinical-report-form">
                    <div class="form-group">
                        <label>الدكتور الأخصائي</label>
                        <input type="text" class="neumorphic-input" placeholder="اسم الدكتور الأخصائي" required>
                    </div>
                    
                    <div class="form-group">
                        <label>العيادة</label>
                        <input type="text" class="neumorphic-input" placeholder="اسم العيادة" required>
                    </div>
                    
                    <div class="form-group">
                        <label>رقم الهاتف/التواصل</label>
                        <input type="tel" class="neumorphic-input" placeholder="رقم التواصل" required>
                    </div>
                    
                    <div class="form-group">
                        <label>الرقم المرجعي للحالة</label>
                        <input type="text" class="neumorphic-input" placeholder="الرقم المرجعي" required>
                    </div>
                    
                    <h3 class="card-title" style="margin-top: 30px;">
                        <i class="fas fa-user"></i> البيانات الديموغرافية للحالة
                    </h3>
                    
                    <div class="case-form">
                        <div class="form-group">
                            <label>الاسم الكامل</label>
                            <input type="text" class="neumorphic-input" placeholder="الاسم الكامل" required>
                        </div>
                        
                        <div class="form-group">
                            <label>تاريخ الميلاد</label>
                            <input type="date" class="neumorphic-input" required>
                        </div>
                        
                        <div class="form-group">
                            <label>العمر الزمني</label>
                            <input type="number" class="neumorphic-input" placeholder="العمر" min="1" max="120" required>
                        </div>
                        
                        <div class="form-group">
                            <label>الجنس</label>
                            <select class="neumorphic-input" required>
                                <option value="">اختر الجنس</option>
                                <option value="male">ذكر</option>
                                <option value="female">أنثى</option>
                            </select>
                        </div>
                        
                        <div class="form-group">
                            <label>الحالة الاجتماعية</label>
                            <select class="neumorphic-input" required>
                                <option value="">اختر الحالة الاجتماعية</option>
                                <option value="single">أعزب</option>
                                <option value="married">متزوج</option>
                                <option value="divorced">مطلق</option>
                                <option value="widowed">أرمل</option>
                            </select>
                        </div>
                        
                        <div class="form-group">
                            <label>المستوى التعليمي</label>
                            <input type="text" class="neumorphic-input" placeholder="المستوى التعليمي" required>
                        </div>
                        
                        <div class="form-group">
                            <label>المهنة</label>
                            <input type="text" class="neumorphic-input" placeholder="المهنة" required>
                        </div>
                        
                        <div class="form-group">
                            <label>تاريخ الفحص</label>
                            <input type="date" class="neumorphic-input" required>
                        </div>
                    </div>
                    
                    <h3 class="card-title" style="margin-top: 30px;">
                        <i class="fas fa-notes-medical"></i> الملاحظات السريرية الأولية
                    </h3>
                    
                    <div class="form-group">
                        <textarea class="neumorphic-input" rows="6" placeholder="أدخل الملاحظات السريرية الأولية" required></textarea>
                    </div>
                    
                    <h3 class="card-title" style="margin-top: 30px;">
                        <i class="fas fa-mental-health"></i> الفحص النفسي للحالة العقلية
                    </h3>
                    
                    <div class="form-group">
                        <label>تقييم المزاج</label>
                        <textarea class="neumorphic-input" rows="3" placeholder="تقييم المزاج" required></textarea>
                    </div>
                    
                    <div class="form-group">
                        <label>تحليل العمليات الفكرية</label>
                        <textarea class="neumorphic-input" rows="3" placeholder="تحليل العمليات الفكرية" required></textarea>
                    </div>
                    
                    <div class="form-group">
                        <label>تقييم الانفعالات</label>
                        <textarea class="neumorphic-input" rows="3" placeholder="تقييم الانفعالات" required></textarea>
                    </div>
                    
                    <h3 class="card-title" style="margin-top: 30px;">
                        <i class="fas fa-brain"></i> التحليل الدينامي النفسي
                    </h3>
                    
                    <div class="form-group">
                        <textarea class="neumorphic-input" rows="6" placeholder="أدخل التحليل الدينامي النفسي" required></textarea>
                    </div>
                    
                    <h3 class="card-title" style="margin-top: 30px;">
                        <i class="fas fa-history"></i> التاريخ النفسي المرضي
                    </h3>
                    
                    <div class="form-group">
                        <textarea class="neumorphic-input" rows="4" placeholder="أدخل التاريخ النفسي المرضي" required></textarea>
                    </div>
                    
                    <h3 class="card-title" style="margin-top: 30px;">
                        <i class="fas fa-diagnoses"></i> التشخيص السريري
                    </h3>
                    
                    <div class="form-group">
                        <textarea class="neumorphic-input" rows="3" placeholder="أدخل التشخيص السريري" required></textarea>
                    </div>
                    
                    <h3 class="card-title" style="margin-top: 30px;">
                        <i class="fas fa-prescription-bottle-alt"></i> التوصيات العلاجية
                    </h3>
                    
                    <div class="form-group">
                        <textarea class="neumorphic-input" rows="6" placeholder="أدخل التوصيات العلاجية" required></textarea>
                    </div>
                    
                    <div class="form-actions" style="margin-top: 30px;">
                        <button type="button" class="neumorphic-btn danger" onclick="backToDashboard()">
                            <i class="fas fa-times"></i> إلغاء
                        </button>
                        <button type="button" class="neumorphic-btn success" onclick="exportToPDF()">
                            <i class="fas fa-file-pdf"></i> تصدير PDF
                        </button>
                        <button type="submit" class="neumorphic-btn success">
                            <i class="fas fa-save"></i> حفظ التقرير
                        </button>
                    </div>
                </form>
            </div>
        </div>

        <!-- واجهة اختبار هاملتون للقلق -->
        <div class="neumorphic-card hidden" id="hamilton-test">
            <div class="test-header">
                <h2 class="card-title">
                    <i class="fas fa-heartbeat"></i> مقياس هاملتون للقلق (HAM-A)
                </h2>
                <div class="progress-container">
                    <div class="progress-indicator">
                        <span class="current-question">1</span>/<span class="total-questions">14</span>
                    </div>
                    <div class="heartbeat-progress">
                        <div class="heartbeat-bar" style="width: 7%;"></div>
                    </div>
                </div>
            </div>

            <div class="question-container">
                <div class="neumorphic-question-card">
                    <div class="question-text" id="question-text">1. المزاج القلق (Anxious Mood)</div>
                    <div class="question-description" id="question-description" style="margin-bottom: 15px; color: var(--text-secondary); font-size: 14px;">
                        مشاعر القلق، التوقع السيئ، المخاوف، التهيج، عدم القدرة على التركيز
                    </div>
                    <div class="rating-scale" id="rating-scale">
                        <div class="rating-option" data-value="0">
                            <span>0 - غائب</span>
                            <span class="option-value">0</span>
                        </div>
                        <div class="rating-option" data-value="1">
                            <span>1 - خفيف</span>
                            <span class="option-value">1</span>
                        </div>
                        <div class="rating-option" data-value="2">
                            <span>2 - متوسط</span>
                            <span class="option-value">2</span>
                        </div>
                        <div class="rating-option" data-value="3">
                            <span>3 - شديد</span>
                            <span class="option-value">3</span>
                        </div>
                        <div class="rating-option" data-value="4">
                            <span>4 - شديد جداً</span>
                            <span class="option-value">4</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="navigation-btns">
                <button class="neumorphic-btn secondary" onclick="prevQuestion()">
                    <i class="fas fa-arrow-right"></i> السابق
                </button>
                <button class="neumorphic-btn primary" onclick="nextQuestion()">
                    <i class="fas fa-arrow-left"></i> التالي
                </button>
            </div>
        </div>

        <!-- واجهة النتائج والتحليل -->
        <div class="neumorphic-card hidden" id="results-panel">
            <div class="results-header">
                <h2 class="card-title">
                    <i class="fas fa-chart-bar"></i> نتيجة اختبار هاملتون للقلق
                </h2>
                <div class="total-score floating">
                    <span id="hamilton-score">0</span>
                    <span class="score-label">/56</span>
                </div>
            </div>

            <div class="interpretation-section">
                <div class="neumorphic-inset">
                    <h3 class="card-title">
                        <i class="fas fa-diagnoses"></i> تحليل النتيجة
                    </h3>
                    <div class="severity-indicator">
                        <div class="severity-level">
                            <div class="severity-marker" id="severity-marker" style="left: 15%;"></div>
                        </div>
                    </div>
                    <div class="severity-labels">
                        <span>خفيف (&lt;17)</span>
                        <span>متوسط (18-24)</span>
                        <span>شديد (25+)</span>
                    </div>
                    <div class="interpretation-text" id="severity-interpretation" style="margin-top: 20px;">
                        <!-- سيتم تعبئته ديناميكياً -->
                    </div>
                </div>
            </div>

            <div class="symptom-breakdown">
                <h3 class="card-title">
                    <i class="fas fa-chart-line"></i> تحليل الأعراض
                </h3>
                
                <div class="neumorphic-inset">
                    <div id="symptom-analysis">
                        <!-- سيتم تعبئته ديناميكياً -->
                    </div>
                </div>
            </div>

            <div class="diagnostic-panel">
                <h3 class="card-title">
                    <i class="fas fa-clipboard-check"></i> الدعم التشخيصي
                </h3>
                
                <div class="neumorphic-inset">
                    <div class="criteria-item">
                        <div class="criteria-icon">
                            <i class="fas fa-book-medical"></i>
                        </div>
                        <div class="criteria-content">
                            <div class="criteria-title">معايير DSM-5-TR</div>
                            <p id="dsm-criteria">بناءً على الدرجة، تظهر أعراض <span id="diagnosis-severity">خفيفة</span> لاضطراب القلق العام (GAD)</p>
                        </div>
                    </div>
                    
                    <div class="criteria-item">
                        <div class="criteria-icon">
                            <i class="fas fa-procedures"></i>
                        </div>
                        <div class="criteria-content">
                            <div class="criteria-title">بروتوكولات NICE</div>
                            <p id="nice-recommendations">النتيجة تشير إلى <span id="intervention-level">حاجة للمتابعة</span> وفقًا للمبادئ التوجيهية لـNICE</p>
                        </div>
                    </div>
                    
                    <div class="criteria-item">
                        <div class="criteria-icon">
                            <i class="fas fa-pills"></i>
                        </div>
                        <div class="criteria-content">
                            <div class="criteria-title">التفاعلات الدوائية</div>
                            <p>لا توجد تفاعلات دوائية مسجلة في النظام. يوصى بمراجعة التاريخ الدوائي للمريض.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="recommendations-section" style="margin-top: 30px;">
                <h3 class="card-title">
                    <i class="fas fa-lightbulb"></i> توصيات علاجية
                </h3>
                
                <ul class="recommendations-list">
                    <li class="recommendation-item">
                        <div class="recommendation-icon">
                            <i class="fas fa-comment-dots"></i>
                        </div>
                        <div class="recommendation-text">
                            <strong>العلاج النفسي:</strong> يُوصى بالعلاج السلوكي المعرفي (CBT) كخط أول للعلاج، مع التركيز على إعادة الهيكلة المعرفية وتقنيات الاسترخاء.
                        </div>
                    </li>
                    
                    <li class="recommendation-item">
                        <div class="recommendation-icon">
                            <i class="fas fa-prescription-bottle-alt"></i>
                        </div>
                        <div class="recommendation-text">
                            <strong>التدخل الدوائي:</strong> في الحالات المتوسطة إلى الشديدة، يُوصى بالنظر في العلاج الدوائي مثل مثبطات استرداد السيروتونين الانتقائية (SSRIs).
                        </div>
                    </li>
                    
                    <li class="recommendation-item">
                        <div class="recommendation-icon">
                            <i class="fas fa-heartbeat"></i>
                        </div>
                        <div class="recommendation-text">
                            <strong>تعديل نمط الحياة:</strong> التأكيد على أهمية النشاط البدني المنتظم، تقنيات اليقظة الذهنية، ونظام غذائي متوازن.
                        </div>
                    </li>
                </ul>
            </div>

            <div class="form-actions" style="margin-top: 30px;">
                <button class="neumorphic-btn secondary" onclick="backToDashboard()">
                    <i class="fas fa-arrow-right"></i> العودة
                </button>
                <button class="neumorphic-btn success" onclick="saveAssessment()">
                    <i class="fas fa-save"></i> حفظ التقييم
                </button>
                <button class="neumorphic-btn primary" onclick="printReport()">
                    <i class="fas fa-print"></i> طباعة التقرير
                </button>
            </div>
        </div>
    </div>

    <script>
        // بيانات اختبار هاملتون للقلق
        const hamiltonQuestions = [
            {
                id: 1,
                text: "1. المزاج القلق (Anxious Mood)",
                description: "مشاعر القلق، التوقع السيئ، المخاوف، التهيج، عدم القدرة على التركيز"
            },
            {
                id: 2,
                text: "2. التوتر (Tension)",
                description: "مشاعر التوتر، التعب، الارتعاش، عدم القدرة على الاسترخاء، الدموع"
            },
            {
                id: 3,
                text: "3. المخاوف (Fears)",
                description: "الخوف من الظلام، الغرباء، الحيوانات، حركة المرور، الحشود"
            },
            {
                id: 4,
                text: "4. الأرق (Insomnia)",
                description: "صعوبة في النوم، الاستيقاظ المتكرر، النوم غير المريح، الكوابيس"
            },
            {
                id: 5,
                text: "5. الصعوبات الإدراكية (Intellectual)",
                description: "صعوبة التركيز، ضعف الذاكرة، انخفاض الأداء الفكري"
            },
            {
                id: 6,
                text: "6. المزاج المكتئب (Depressed Mood)",
                description: "فقدان الاهتمام، قلة الاستمتاع، الاكتئاب، الاستيقاظ المبكر"
            },
            {
                id: 7,
                text: "7. الأعراض الجسدية العضلية (Somatic Muscular)",
                description: "آلام العضلات، التصلب، الارتعاش، الشد، التململ"
            },
            {
                id: 8,
                text: "8. الأعراض الجسدية الحسية (Somatic Sensory)",
                description: "طنين الأذن، عدم وضوح الرؤية، الهبات الساخنة، الشعور بالضعف"
            },
            {
                id: 9,
                text: "9. أعراض القلب والأوعية الدموية (Cardiovascular Symptoms)",
                description: "خفقان، تسارع ضربات القلب، آلام الصدر، النبض المتقطع"
            },
            {
                id: 10,
                text: "10. أعراض الجهاز التنفسي (Respiratory Symptoms)",
                description: "ضيق في الصدر، الشعور بالاختناق، التنهد، صعوبة التنفس"
            },
            {
                id: 11,
                text: "11. أعراض الجهاز الهضمي (Gastrointestinal Symptoms)",
                description: "صعوبة البلع، انتفاخ البطن، حرقة المعدة، الإمساك"
            },
            {
                id: 12,
                text: "12. أعراض الجهاز البولي التناسلي (Genitourinary Symptoms)",
                description: "تكرار التبول، الحاجة الملحة للتبول، انقطاع الطمث، البرود الجنسي"
            },
            {
                id: 13,
                text: "13. أعراض الجهاز العصبي اللاإرادي (Autonomic Symptoms)",
                description: "جفاف الفم، التعرق، الدوخة، الصداع"
            },
            {
                id: 14,
                text: "14. السلوك أثناء المقابلة (Behavior at Interview)",
                description: "التململ، عدم الاستقرار، تعابير الوجه القلقة، فرط التنفس"
            }
        ];

        let currentQuestion = 0;
        const answers = new Array(hamiltonQuestions.length).fill(0);

        // فتح دراسة الحالة
        function openCaseStudy() {
            document.getElementById('main-dashboard').classList.add('hidden');
            document.getElementById('case-study').classList.remove('hidden');
            loadSavedData('case-study');
        }

        // فتح التقارير العيادية
        function openClinicalReports() {
            document.getElementById('main-dashboard').classList.add('hidden');
            document.getElementById('clinical-reports').classList.remove('hidden');
            loadSavedData('clinical-report');
        }

        // فتح اختبار هاملتون
        function openHamiltonTest() {
            document.getElementById('main-dashboard').classList.add('hidden');
            document.getElementById('hamilton-test').classList.remove('hidden');
            updateQuestion();
        }

        // العودة للواجهة الرئيسية
        function backToDashboard() {
            if (confirm('هل تريد العودة إلى الشاشة الرئيسية؟ سيتم فقدان أي بيانات غير محفوظة.')) {
                document.querySelectorAll('.neumorphic-card').forEach(card => {
                    card.classList.add('hidden');
                });
                document.getElementById('main-dashboard').classList.remove('hidden');
            }
        }

        // تحديث السؤال المعروض
        function updateQuestion() {
            document.querySelector('.current-question').textContent = currentQuestion + 1;
            document.getElementById('question-text').textContent = hamiltonQuestions[currentQuestion].text;
            document.getElementById('question-description').textContent = hamiltonQuestions[currentQuestion].description;
            
            // تحديث شريط التقدم
            const progressPercentage = ((currentQuestion + 1) / hamiltonQuestions.length) * 100;
            document.querySelector('.heartbeat-bar').style.width = `${progressPercentage}%`;
            
            // إعادة تعيين خيارات التقييم
            document.querySelectorAll('.rating-option').forEach(option => {
                option.classList.remove('selected');
                if (parseInt(option.dataset.value) === answers[currentQuestion]) {
                    option.classList.add('selected');
                }
            });
        }

        // اختيار إجابة
        document.getElementById('rating-scale').addEventListener('click', function(e) {
            if (e.target.closest('.rating-option')) {
                const option = e.target.closest('.rating-option');
                this.querySelectorAll('.rating-option').forEach(opt => {
                    opt.classList.remove('selected');
                });
                option.classList.add('selected');
                answers[currentQuestion] = parseInt(option.dataset.value);
            }
        });

        // السؤال التالي
        function nextQuestion() {
            if (answers[currentQuestion] === undefined) {
                alert('الرجاء اختيار درجة التقييم قبل المتابعة');
                return;
            }

            if (currentQuestion < hamiltonQuestions.length - 1) {
                currentQuestion++;
                updateQuestion();
            } else {
                showResults();
            }
        }

        // السؤال السابق
        function prevQuestion() {
            if (currentQuestion > 0) {
                currentQuestion--;
                updateQuestion();
            }
        }

        // عرض النتائج
        function showResults() {
            const totalScore = answers.reduce((sum, value) => sum + value, 0);
            
            document.getElementById('hamilton-test').classList.add('hidden');
            document.getElementById('results-panel').classList.remove('hidden');
            
            document.getElementById('hamilton-score').textContent = totalScore;
            interpretScore(totalScore);
            generateSymptomAnalysis();
        }

        // تفسير النتيجة
        function interpretScore(score) {
            let interpretation = '';
            let diagnosis = '';
            let severity = '';
            let intervention = '';
            let markerPosition = 15;
            
            if(score < 17) {
                interpretation = 'النتيجة تشير إلى <strong>قلق خفيف</strong>. قد لا يستدعي هذا المستوى تدخلًا علاجيًا فوريًا، ولكن يُوصى بمتابعة الحالة والتقييم الدوري. يمكن أن تكون التدخلات غير الدوائية مثل العلاج النفسي التثقيفي وتقنيات إدارة الإجهاد مفيدة.';
                diagnosis = 'قد لا يستوفي معايير التشخيص الكاملة لاضطراب القلق العام';
                severity = 'خفيفة';
                intervention = 'متابعة دورية';
                markerPosition = 10;
            } else if(score < 25) {
                interpretation = 'النتيجة تشير إلى <strong>قلق متوسط</strong>. هذا المستوى يستدعي تقييمًا إضافيًا ويفضل بدء تدخل علاجي. العلاج النفسي (خاصة العلاج السلوكي المعرفي) هو خط العلاج الأول الموصى به. في بعض الحالات، قد يتم النظر في العلاج الدوائي بعد التقييم الطبي.';
                diagnosis = 'يشير إلى اضطراب القلق العام المحتمل';
                severity = 'متوسطة';
                intervention = 'تقييم إضافي وعلاج نفسي';
                markerPosition = 50;
            } else {
                interpretation = 'النتيجة تشير إلى <strong>قلق شديد</strong>. هذا المستوى يستدعي تدخلًا فوريًا. يُوصى ببدء علاج متكامل يشمل العلاج النفسي والدوائي. يجب تقييم خطر الانتحار والأعراض الاكتئابية المصاحبة. المتابعة المنتظمة ضرورية لتقييم الاستجابة للعلاج.';
                diagnosis = 'يشير بقوة إلى اضطراب القلق العام';
                severity = 'شديدة';
                intervention = 'تدخل علاجي فوري';
                markerPosition = 90;
            }
            
            document.getElementById('severity-interpretation').innerHTML = interpretation;
            document.getElementById('dsm-criteria').innerHTML = `بناءً على الدرجة، تظهر أعراض <strong>${severity}</strong> لاضطراب القلق العام (GAD)`;
            document.getElementById('nice-recommendations').innerHTML = `النتيجة تشير إلى <strong>${intervention}</strong> وفقًا للمبادئ التوجيهية لـNICE`;
            document.getElementById('diagnosis-severity').textContent = severity;
            document.getElementById('intervention-level').textContent = intervention;
            document.getElementById('severity-marker').style.left = `${markerPosition}%`;
        }

        // تحليل الأعراض
        function generateSymptomAnalysis() {
            const symptomAnalysis = document.getElementById('symptom-analysis');
            symptomAnalysis.innerHTML = '';
            
            hamiltonQuestions.forEach((question, index) => {
                const score = answers[index];
                const percentage = (score / 4) * 100;
                
                const symptomItem = document.createElement('div');
                symptomItem.className = 'symptom-item';
                symptomItem.innerHTML = `
                    <div class="symptom-name">${question.text}</div>
                    <div class="symptom-bar-container">
                        <div class="symptom-bar" style="width: ${percentage}%;"></div>
                    </div>
                    <div class="symptom-score">${score}</div>
                `;
                
                symptomAnalysis.appendChild(symptomItem);
            });
        }

        // حفظ البيانات في LocalStorage
        function saveToLocalStorage(key, data) {
            try {
                localStorage.setItem(key, JSON.stringify(data));
                return true;
            } catch (e) {
                console.error('Failed to save data:', e);
                return false;
            }
        }

        // تحميل البيانات من LocalStorage
        function loadFromLocalStorage(key) {
            try {
                const data = localStorage.getItem(key);
                return data ? JSON.parse(data) : null;
            } catch (e) {
                console.error('Failed to load data:', e);
                return null;
            }
        }

        // تحميل البيانات المحفوظة
        function loadSavedData(formType) {
            const savedData = loadFromLocalStorage(`${formType}-form-data`);
            if (savedData) {
                const form = document.getElementById(`${formType}-form`);
                Object.keys(savedData).forEach(key => {
                    const input = form.querySelector(`[name="${key}"]`);
                    if (input) {
                        input.value = savedData[key];
                    }
                });
            }
        }

        // حفظ التقييم
        function saveAssessment() {
            const assessmentData = {
                score: document.getElementById('hamilton-score').textContent,
                date: new Date().toISOString(),
                answers: answers
            };

            if (saveToLocalStorage('hamilton-assessment', assessmentData)) {
                alert('تم حفظ التقييم بنجاح في سجل المريض.');
            } else {
                alert('حدث خطأ أثناء محاولة حفظ التقييم.');
            }
        }

        // تصدير إلى PDF
        function exportToPDF() {
            alert('سيتم تصدير التقرير إلى PDF. هذه ميزة تجريبية وسيتم تنفيذها بالكامل في الإصدارات القادمة.');
            // هنا يمكن إضافة كود لإنشاء PDF باستخدام مكتبة مثل jsPDF
        }

        // طباعة التقرير
        function printReport() {
            window.print();
        }

        // تبديل الوضع الليلي
        function toggleDarkMode() {
            document.body.classList.toggle('dark-mode');
            const logoIcon = document.querySelector('.logo i');
            if (document.body.classList.contains('dark-mode')) {
                logoIcon.classList.remove('fa-moon');
                logoIcon.classList.add('fa-sun');
            } else {
                logoIcon.classList.remove('fa-sun');
                logoIcon.classList.add('fa-moon');
            }
        }

        // رسالة "قريباً" للميزات غير المطورة
        function showComingSoon() {
            alert('هذه الميزة قيد التطوير وسيتم إتاحتها قريباً.');
        }

        // منع إرسال النماذج (لأغراض العرض التوضيحي)
        document.getElementById('case-study-form').addEventListener('submit', function(e) {
            e.preventDefault();
            const formData = {};
            Array.from(this.elements).forEach(element => {
                if (element.name) {
                    formData[element.name] = element.value;
                }
            });
            
            if (saveToLocalStorage('case-study-form-data', formData)) {
                alert('تم حفظ بيانات دراسة الحالة بنجاح.');
                backToDashboard();
            } else {
                alert('حدث خطأ أثناء محاولة حفظ البيانات.');
            }
        });

        document.getElementById('clinical-report-form').addEventListener('submit', function(e) {
            e.preventDefault();
            const formData = {};
            Array.from(this.elements).forEach(element => {
                if (element.name) {
                    formData[element.name] = element.value;
                }
            });
            
            if (saveToLocalStorage('clinical-report-form-data', formData)) {
                alert('تم حفظ التقرير العيادي بنجاح.');
                backToDashboard();
            } else {
                alert('حدث خطأ أثناء محاولة حفظ التقرير.');
            }
        });

        // تهيئة عدد الأسئلة
        document.querySelector('.total-questions').textContent = hamiltonQuestions.length;
    </script>
</body>
</html>
