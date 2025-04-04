import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
export function cn(...inputs) {
    return twMerge(clsx(inputs));
}

export const FINEPAYMENTSTATUS = {
    PENDING: 'TERTUNDA',
    SUCCESS: 'Sukses',
    FAILED: 'Gagal',
};

export function flashMessage(params) {
    return params.props.flash_message;
}

export const formatToRupiah = amount => {
    const formatter = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    });

    return formatter.format(amount);
};

export const message = {
    503: {
        title: 'Service Unavailable',
        message: 'Layanan tidak tersedia, silahkan coba beberapa saat lagi',
        status: '503',
    },
    500: {
        title: 'Server Error',
        message: 'Terjadi kesalahan pada server, silahkan coba beberapa saat lagi',
        status: '500',
    },
    403: {
        title: 'Forbidden',
        message: 'Akses ditolak',
        status: '403',
    },
    401: {
        title: 'Unauthorized',
        message: 'Maaf, anda tidak memiliki akses untuk mengakses halaman ini',
        status: '401',
    },
    429: {
        title: 'Too Many Requests',
        message: 'Maaf, terlalu banyak permintaan, silahkan coba beberapa saat lagi',
        status: '429',
    },
};
