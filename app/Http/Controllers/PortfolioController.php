<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class PortfolioController extends Controller
{
    public function index()
    {
        $profile = [
            'name' => 'Ridwan Ramadhan',
            'title' => 'Full-Stack Developer • Mobile Developer • System Architect • Cloud & DevOps Enthusiast',
            'description' => 'Saya adalah seorang developer serba bisa yang membangun ekosistem digital lengkap untuk lingkungan Pendidikan — mulai dari aplikasi mobile, website, manajemen sekolah, sampai automasi AI. Saya bekerja lintas banyak bahasa, framework, dan platform. Saya juga berperan sebagai System Designer, bukan hanya coder.',
            'github' => 'https://github.com/Ridwan1711',
        ];

        $skills = [
            [
                'category' => 'Full-Stack Web Development',
                'items' => [
                    'Backend: Laravel 10–12 (PHP 8.4), REST API Design, Queue System (Redis, Horizon), Payment Integration (Midtrans Core API), Authentication System (Sanctum, Session, Multi-Guard), InertiaJS Backends',
                    'Frontend: React + TypeScript + Tailwind CSS, SSR / SPA via InertiaJS, UI/UX Design & Componentization, React Form Architecture (Zod, useForm)',
                    'Database: MySQL / MariaDB (expert), PostgreSQL (intermediate), Query optimization & relational modeling, Local database: Isar, ObjectBox',
                ],
            ],
            [
                'category' => 'Mobile Development (Flutter & Android Native)',
                'items' => [
                    'Flutter: Clean Architecture, State Management (Provider, Riverpod), Offline-first apps (Isar), Firebase Cloud Messaging, Custom UI/Animations',
                    'Android Native: Kotlin + Gradle, ExoPlayer (music player engine), Foreground Service + Notification Controls, Waveform SeekBar, Dynamic Permission Handling',
                ],
            ],
            [
                'category' => 'AI, Machine Learning & Optimization Systems',
                'items' => [
                    'Google OR-Tools (CP-SAT) → Timetable optimization',
                    'Custom CSP Solver (PhpSolver)',
                    'Research on Quantum-inspired Optimization (QAOA-like)',
                    'Automated scheduling algorithms',
                    'Knowledge of heuristics & constraint modeling',
                ],
            ],
            [
                'category' => 'DevOps & Cloud Deployment',
                'items' => [
                    'VPS management (Ubuntu 22.04)',
                    'Docker & Docker Compose',
                    'Reverse Proxy (Nginx)',
                    'n8n Automation (self-hosted)',
                    'HestiaCP / CyberPanel deployment',
                    'CI/CD (Git, GitHub)',
                    'Server optimization & networking',
                ],
            ],
            [
                'category' => 'Infrastructure & Networking',
                'items' => [
                    'Building & managing computer labs',
                    'Static IP, DHCP, router optimization (Unifi, Tenda, TP-Link)',
                    'Veyon remote control',
                    'SMB shares',
                    'UPS planning & network reliability setup',
                ],
            ],
            [
                'category' => 'Design & Branding',
                'items' => [
                    'UI/UX design',
                    'Vector/logo creation (AI prompt engineering)',
                    'Play Store Assets (1024×500, adaptive icons)',
                    'Document & proposal design (A4, landscape, PDF)',
                ],
            ],
        ];

        $projects = [
            [
                'name' => 'Huda — Quran App',
                'tech' => 'Flutter',
                'description' => 'Fast Isar DB, Arabic rendering, Bookmarking, tafsir, audio player, Custom UI/UX premium quality',
            ],
            [
                'name' => 'PPDB Manarul Huda — Admission System',
                'tech' => 'Laravel + React',
                'description' => 'Multi-step student registration, Guardian management system, Midtrans payment integration, Applicant completeness checker, Admin dashboard full monitoring',
            ],
            [
                'name' => 'ManhoodVerse — Student Management System',
                'tech' => 'Laravel + React',
                'description' => 'Student identity & guardian system, Timetable integration, Document generator (SK, proposal, laporan), Multi-role authentication, Centralized student ecosystem',
            ],
            [
                'name' => 'Jadwalin — Timetable Generator SaaS',
                'tech' => 'Laravel + PHP Custom Solver',
                'description' => 'PHP Custom Solver (PhpSolver), OR-Tools CP-SAT Worker, Future plan: Quantum-lite optimizer, Multi-school subscription model, Class/teacher constraints, Full admin panel & logs',
            ],
            [
                'name' => 'Network Infrastructure (LabKom)',
                'tech' => 'Infrastructure',
                'description' => 'Installed & configured 30+ PCs, Router optimization, Remote control via Veyon, SMB file server, DHCP planning, UPS deployment',
            ],
            [
                'name' => 'n8n Self-Hosted Automation',
                'tech' => 'Automation',
                'description' => 'Webhook integrations, Database automations, Workflow for PPDB, payment, notifications',
            ],
        ];

        $techStack = [
            ['area' => 'Backend', 'skills' => 'PHP, Laravel, MySQL, PostgreSQL'],
            ['area' => 'Frontend', 'skills' => 'React, TS, Tailwind'],
            ['area' => 'Mobile', 'skills' => 'Flutter, Dart, Kotlin'],
            ['area' => 'AI/Solver', 'skills' => 'Python, OR-Tools, Optimization'],
            ['area' => 'DevOps', 'skills' => 'Docker, Nginx, Hestia, CyberPanel'],
            ['area' => 'Cloud', 'skills' => 'VPS, Linux, GitHub'],
            ['area' => 'Design', 'skills' => 'Canva, AI Prompting, Tailwind UI'],
            ['area' => 'Networking', 'skills' => 'Router, static IP, Veyon, SMB'],
        ];

        $characteristics = [
            'Sangat teknis dan multi-stack',
            'Berpikir sistemik (from architecture → deployment)',
            'Bisa memimpin proyek end-to-end',
            'Konsisten, detail, penuh eksperimen',
            'Cepat belajar & adaptif',
            'Punya vision untuk membangun ekosistem pendidikan digital modern',
        ];

        return Inertia::render('Portfolio', [
            'profile' => $profile,
            'skills' => $skills,
            'projects' => $projects,
            'techStack' => $techStack,
            'characteristics' => $characteristics,
        ]);
    }
}

